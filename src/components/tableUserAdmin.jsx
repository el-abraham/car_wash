import React from "react";

export default function TableUserAdmin({ head, data }) {
  return (
    <div>
      <table className="w-[800px] table-auto border-collapse bg-gray-400">
        <thead>
          <tr className="bg-gray-500 text-left">
            {head &&
              head.map((item, index) => (
                <th className="py-2 px-4 border-b" key={index}>
                  {item}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id} className="">
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
                <td className="py-2 px-4 border-b">{item.role_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
