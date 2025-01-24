import React from "react";
import { deleteBooking } from "../api/bookingApi";

export default function TablePesananAdmin({ head, data, onEdit }) {
  const convDate = (date) => {
    const ConvertDate = new Date(date);
    const formattedDate = ConvertDate.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    return formattedDate;
  };

  const deletePesanan = async (id) => {
    const result = confirm("Anda Yakin Menghapus Data ini ?");
    if (result) {
      const response = await deleteBooking(id);
      if (response.status == 200) {
        alert(response.message);
      }
    }
  };

  return (
    <div>
      <table className="w-full table-auto border-collapse bg-gray-400">
        <thead>
          <tr className="bg-gray-500 text-left">
            {head &&
              head.map((item, index) => (
                <th className="py-2 px-4 border-b" key={index}>
                  {item}
                </th>
              ))}
            <th className="py-2 px-4 border-b text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id} className="">
                <td className="py-2 px-4 border-b">{convDate(item.date)}</td>
                <td className="py-2 px-4 border-b">{item.time}</td>
                <td className="py-2 px-4 border-b">{item.package_name}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`font-bold ${
                      item.status === "Selesai"
                        ? "px-3 py-2 rounded bg-green-500 text-white"
                        : item.status === "proses"
                        ? "px-3 py-2 rounded bg-yellow-500 text-white"
                        : "px-3 py-2 rounded bg-blue-500 text-white"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <th className="py-2 px-4 border-b space-x-3">
                  <input
                    type="button"
                    className="bg-blue-500 text-white px-3 py-2 rounded cursor-pointer"
                    onClick={() => onEdit(item)}
                    value="Edit"
                  />
                  <input
                    type="button"
                    className="bg-red-500 text-white px-3 py-2 rounded cursor-pointer"
                    onClick={() => deletePesanan(item.id)}
                    value="Delete"
                  />
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
