import React, { useEffect, useState } from "react";
import FormPaket from "../components/formPaket";
import TablePaketAdmin from "../components/tablePaketAdmin";
import { getDataPackage } from "../api/packageApi";

export default function PaketAdmin() {
  const [action, setAction] = useState("Tambah");
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  const fetchDataUser = async () => {
    const response = await getDataPackage();
    if (response.status == 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, [data]);

  const handleEdit = (item) => {
    setAction("Edit");
    setSelectedData(item);
  };

  const thead = ["Paket", "Harga"];
  return (
    <div className="w-full h-full flex flex-row items-center space-x-6">
      <FormPaket
        selectedData={selectedData}
        action={action}
        setAction={setAction}
      />
      <TablePaketAdmin head={thead} data={data} onEdit={handleEdit} />
    </div>
  );
}
