import React, { useState, useEffect } from "react";
import FormDonasi from "./components/FormDonasi";
import DaftarBarang from "./components/DaftarBarang";
import dataBarang from "./data/barang.json";

const App = () => {
  const [barang, setBarang] = useState([]);

  // Mengisi data barang dari file JSON saat komponen pertama kali dimuat
  useEffect(() => {
    setBarang(dataBarang);
  }, []);

  // Fungsi untuk menambahkan barang baru ke daftar
  const addBarang = (newBarang) => {
    setBarang([...barang, { ...newBarang, id: barang.length + 1 }]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Sistem Donasi Barang Bekas
      </h1>
      {/* Komponen Form Donasi */}
      <FormDonasi addBarang={addBarang} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Daftar Barang Donasi</h2>
        {/* Komponen Daftar Barang */}
        <DaftarBarang barang={barang} />
      </div>
    </div>
  );
};

export default App;
