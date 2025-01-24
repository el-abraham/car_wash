import React, { useEffect, useState } from "react";
import TableAdmin from "../components/tablePesananAdmin";
import { getDataBooking } from "../api/bookingApi";
import TablePesananAdmin from "../components/tablePesananAdmin";
import FormPesanan from "../components/formPesanan";

export default function PesananAdmin() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  const fetchDataUser = async () => {
    const response = await getDataBooking();
    if (response.status == 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, [data]);

  const handleEdit = (item) => {
    setSelectedData(item);
  };

  const thead = ["Tanggal Pesan", "Jam", "Paket", "Harga", "status"];
  return (
    <div className="w-full h-full flex flex-row items-center space-x-6">
      <FormPesanan selectedData={selectedData} />
      <TablePesananAdmin head={thead} data={data} onEdit={handleEdit} />
    </div>
  );
}
