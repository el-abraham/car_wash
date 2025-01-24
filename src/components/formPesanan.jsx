import React, { useEffect, useState } from "react";
import { getDataPackage } from "../api/packageApi";
import { io } from "socket.io-client";
import { createDataBooking, getBookingTime } from "../api/bookingApi";
import { updateStatus } from "../api/bookingApi";

export default function FormPesanan({ selectedData }) {
  //   const ws = io(import.meta.env.VITE_URL);

  //   useEffect(() => {
  //     const getPackage = async () => {
  //       const response = await getDataPackage();
  //       setPackageOption(response.data);
  //     };
  //     getPackage();

  //     ws.on("update_bookings", (data) => {
  //       setBookedTimes(bookedTimes.filter((item) => item !== data.time));
  //     });

  //     return () => {
  //       ws.off("update_bookings");
  //     };
  //   }, [bookedTimes]);

  const [formData, setFormData] = useState({
    id: "",
    date: Date.now(),
    time: "",
    package_id: "",
    package_name: "",
    price: "",
    status: "",
  });

  useEffect(() => {
    if (selectedData) {
      setFormData(selectedData);
    }
  }, [selectedData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await updateStatus(formData.id, formData);
    if (response.status == 200) {
      alert(response.message);
      setFormData({
        id: "",
        date: Date.now(),
        time: "",
        package_id: "",
        package_name: "",
        price: "",
        status: "",
      });
    }
  };

  const convDate = (date) => {
    const ConvertDate = new Date(date);
    const formattedDate = ConvertDate.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    return formattedDate;
  };
  return (
    <div className="w-[400px] mt-10 p-6 bg-white shadow-md rounded-lg text-black">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 p-2">
            Tanggal
          </label>
          <input
            type="text"
            id="tanggal"
            value={convDate(formData.date)}
            className="w-full px-4 py-2 border rounded-md capitalize"
            disabled={true}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 p-2">
            Jam
          </label>
          <input
            type="jam"
            id="jam"
            value={formData.time}
            className="w-full px-4 py-2 border rounded-md capitalize"
            disabled={true}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 p-2">
            Paket
          </label>
          <input
            type="text"
            id="paket"
            value={formData.package_name}
            className="w-full px-4 py-2 border rounded-md capitalize"
            disabled={true}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 p-2">
            Harga
          </label>
          <input
            type="text"
            id="price"
            value={formData.price}
            className="w-full px-4 py-2 border rounded-md capitalize"
            disabled={true}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 p-2">
            Status
          </label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md capitalize"
            required
          >
            <option value="" disabled>
              Pilih Status
            </option>
            <option value="Proses">Proses</option>
            <option value="Dalam Antrian">Dalam Antrian</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
