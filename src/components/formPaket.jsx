import React, { useEffect, useState } from "react";
import { createDataPackage, updateDataPackage } from "../api/packageApi";

export default function FormPaket({ selectedData, action, setAction }) {
  const [formData, setFormData] = useState({
    package_name: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (selectedData) {
      setFormData(selectedData);
    }
  }, [selectedData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action == "Tambah") {
      const response = await createDataPackage(formData);
      if (response.status == 201) {
        alert(response.message);
        setFormData({
          package_name: "",
          price: "",
        });
      }
    }
    if (action == "Edit") {
      const response = await updateDataPackage(formData);
      if (response.status == 200) {
        alert(response.message);
        setFormData({
          package_name: "",
          price: "",
        });
      }
    }
  };

  const handleClear = () => {
    setFormData({
      package_name: "",
      price: "",
    });
    setAction("Tambah");
  };

  return (
    <div className="w-[400px] mt-10 p-6 bg-white shadow-md rounded-lg text-black">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 p-2">
            Nama Paket
          </label>
          <input
            type="text"
            name="package_name"
            value={formData.package_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md capitalize"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 p-2">
            Harga
          </label>
          <input
            type="number"
            step={1000}
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md capitalize"
          />
        </div>

        {/* Submit */}
        <div className="flex flex-row gap-2">
          <button
            onClick={handleSubmit}
            className="w-full text-white py-2 rounded-md "
          >
            {action}
          </button>
          <button
            className="w-full text-white py-2 rounded-md"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
