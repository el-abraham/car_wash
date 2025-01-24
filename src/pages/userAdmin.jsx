import React, { useEffect, useState } from "react";
import { getDataUser } from "../api/userApi";
import TableUserAdmin from "../components/tableUserAdmin";

export default function UserAdmin() {
  const [data, setData] = useState([]);
  const fetchDataUser = async () => {
    const response = await getDataUser();
    if (response.status == 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  const thead = ["Nama", "Email", "Role"];
  return (
    <div className="w-full flex">
      <TableUserAdmin head={thead} data={data} />
    </div>
  );
}
