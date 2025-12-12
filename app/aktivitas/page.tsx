import Header from "@/components/Header";
import React from "react";

export default function AktivitasPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-center text-base text-gray-500">
          Kegiatan belum ditambahkan.
          <br />
          Kami akan segera menambahkan kegiatan lengkap disini.
        </p>
      </div>
    </>
  );
}
