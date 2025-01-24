import React, { useEffect, useState } from "react";
import { getDataPackage } from "../api/packageApi";
import { io } from "socket.io-client";
import { createDataBooking, getBookingTime } from "../api/bookingApi";

export default function FormBook() {
  const id = parseInt(localStorage.getItem("userId")) || null;
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [packageOption, setPackageOption] = useState([]);
  const [bookedTimes, setBookedTimes] = useState([]);

  const availableTimes = [
    "09:00:00",
    "10:00:00",
    "11:00:00",
    "13:00:00",
    "14:00:00",
    "15:00:00",
  ];

  const fetchBookTime = async () => {
    if (selectedDate !== "") {
      const response = await getBookingTime(selectedDate);
      setBookedTimes(response.data);
    }
  };
  const ws = io(import.meta.env.VITE_URL);

  useEffect(() => {
    const getPackage = async () => {
      const response = await getDataPackage();
      setPackageOption(response.data);
    };
    getPackage();

    ws.on("update_bookings", (data) => {
      setBookedTimes(bookedTimes.filter((item) => item !== data.time));
    });

    return () => {
      ws.off("update_bookings");
    };
  }, [bookedTimes]);

  useEffect(() => {
    fetchBookTime();
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      user_id: id,
      package_id: selectedPackage,
      date: selectedDate,
      time: selectedTime,
      status: "Dalam Antrian",
    };

    const response = await createDataBooking(data);
    if (response.status == 201) {
      alert(response.message);
      ws.emit("booking_update", { time: selectedTime, date: selectedDate });
    }
  };
  return (
    <div className="w-[500px] mt-10 p-6 bg-white shadow-md rounded-lg text-black">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Form Booking Cuci Kendaraan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="package"
            className="block text-sm font-medium text-gray-600 mb-2 p-2"
          >
            Pilih Paket
          </label>
          <select
            id="package"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            className="w-full px-4 py-2 border rounded-md capitalize"
            required
          >
            <option value="" disabled>
              Pilih Paket
            </option>
            {packageOption.map((item) => (
              <option value={item.id} key={item.id} className="capitalize">
                {item.package_name} - Rp.{item.price}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Pilih Tanggal
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-black"
            required
          />
        </div>

        {/* Select Time */}
        <div>
          {selectedDate !== "" ? (
            <>
              {" "}
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Pilih Jam
              </label>
              <div className="grid grid-cols-3 gap-3 text-white">
                {availableTimes.map((time) => (
                  <input
                    key={time}
                    type="button"
                    className={`px-4 py-2 border rounded-md text-center ${
                      !bookedTimes.includes(time)
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-black hover:bg-gray-500 cursor-pointer"
                    }`}
                    disabled={!bookedTimes.includes(time)}
                    onClick={() => setSelectedTime(time)}
                    value={time}
                  />
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
