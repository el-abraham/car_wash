import React, { useState, useEffect } from "react";
import { getDataBookingByUser } from "../api/bookingApi";

export default function Pesanan() {
  const [data, setDatas] = useState([]);
  const FetchDataOrder = async () => {
    const id = parseInt(localStorage.getItem("userId"));
    const response = await getDataBookingByUser(id);
    if (response.status == 200) {
      setDatas(response.data);
    }
  };

  const convDate = (date) => {
    const convDate = new Date(date);
    const formattedDate = convDate.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    return formattedDate;
  };

  useEffect(() => {
    FetchDataOrder();
  }, []);
  return (
    <div className="md:w-[800px] h-full mt-10 p-6 bg-white shadow-md rounded-lg text-black">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Pesanan Anda
      </h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4 border-b">Tanggal Pesan</th>
            <th className="py-2 px-4 border-b">Jam</th>
            <th className="py-2 px-4 border-b">Paket</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{convDate(item.date)}</td>
              <td className="py-2 px-4 border-b">{item.time}</td>
              <td className="py-2 px-4 border-b">{item.package_name}</td>
              <td className="py-2 px-4 border-b">Rp.{item.price}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`font-bold ${
                    item.status === "Selesai"
                      ? "text-green-500"
                      : item.status === "Proses"
                      ? "text-yellow-500"
                      : "text-blue-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
