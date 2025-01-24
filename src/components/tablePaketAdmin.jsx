import React from "react";
import { deleteDataPackage } from "../api/packageApi";

export default function TablePaketAdmin({ head, data, onEdit }) {
  const deletePaket = async (id) => {
    const result = confirm("Anda Yakin Menghapus Data ini ?");
    if (result) {
      const response = await deleteDataPackage(id);
      if (response.status == 200) {
        alert(response.message);
      }
    }
  };

  return (
    <div>
      <table className="w-[600px] table-auto border-collapse bg-gray-400">
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
                <td className="py-2 px-4 border-b">{item.package_name}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
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
                    onClick={() => deletePaket(item.id)}
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
