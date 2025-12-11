import Image from "next/image";
import about from "@/public/about.jpg";
export default function Tentang() {
  return (
    <div
      className="container min-h-screen mx-auto lg:w-5xl px-4 py-10"
      id="tentang"
    >
      <h1 className="text-4xl font-bold text-center mb-10">
        Tentang Kelas Kami
      </h1>
      <div className="grid md:grid-cols-[1fr_2fr] justify-center grid-cols-1 gap-10">
        <Image
          src={about}
          alt="about"
          width={300}
          height={300}
          className="rounded-sm"
        />
        <p className="leading-loose text-justify">
          Kelas Pendidikan Informatika 1C merupakan wadah belajar bagi mahasiswa
          yang berkomitmen untuk mengembangkan kemampuan di bidang teknologi dan
          pendidikan. Di kelas ini, kami tidak hanya mempelajari teori, tetapi
          juga berlatih untuk menerapkan ilmu secara nyata melalui kolaborasi,
          diskusi, dan berbagai kegiatan akademik. Dengan lingkungan belajar
          yang suportif, kami berusaha tumbuh bersama menjadi generasi pendidik
          yang kreatif, profesional, dan berintegritas.
        </p>
      </div>
    </div>
  );
}
