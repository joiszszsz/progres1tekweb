import React, { useState } from "react";

const FormDonasi = ({ addBarang }) => {
  const [formData, setFormData] = useState({
    nama: "",
    kategori: "",
    lokasi: "",
    deskripsi: "",
    jadwal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBarang(formData);
    setFormData({ nama: "", kategori: "", lokasi: "", deskripsi: "", jadwal: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow rounded">
      <input
        type="text"
        name="nama"
        placeholder="Nama Barang"
        value={formData.nama}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="kategori"
        placeholder="Kategori"
        value={formData.kategori}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="lokasi"
        placeholder="Lokasi"
        value={formData.lokasi}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="deskripsi"
        placeholder="Deskripsi Barang"
        value={formData.deskripsi}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="date"
        name="jadwal"
        value={formData.jadwal}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Tambahkan Donasi
      </button>
    </form>
  );
};

export default FormDonasi;
