import React from "react";

const DaftarBarang = ({ barang }) => {
  return (
    <div className="space-y-4">
      {barang.map((item, index) => (
        <div key={index} className="p-4 border rounded shadow">
          <h3 className="text-lg font-semibold">{item.nama}</h3>
          <p>Kategori: {item.kategori}</p>
          <p>Lokasi: {item.lokasi}</p>
          <p>Deskripsi: {item.deskripsi}</p>
          <p>Jadwal Pengambilan: {item.jadwal}</p>
        </div>
      ))}
    </div>
  );
};

export default DaftarBarang;
