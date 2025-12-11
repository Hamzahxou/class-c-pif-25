import Image from "next/image";
import about from "@/public/assets/about.jpg";
export default function Tentang() {
  return (
    <section
      className="container min-h-screen mx-auto lg:w-5xl px-5 py-10"
      id="tentang"
    >
      <h1 className="lg:text-4xl text-3xl font-bold text-center mb-10">
        Tentang Kelas Kami
      </h1>
      <div className="grid md:grid-cols-[1fr_2fr] justify-center grid-cols-1 gap-10">
        <Image
          src={about}
          alt="about"
          width={300}
          height={300}
          className="rounded-sm w-full"
        />
        <p className="leading-loose text-justify">
          Pendidikan Informatika Kelas 1C adalah kelas yang kompak dan penuh
          vibes positif.Di sini, kita nggak cuma belajar teori, tapi juga
          praktik bareng, diskusi santai, dan ikut berbagai kegiatan seru bikin
          ilmu makin nempel.Dengan suasana kelas yang suportif dan saling
          mendukung, kita tumbuh bersama jadi calon pendidik yang kreatif,
          percaya diri, dan siap berkembang.
        </p>
      </div>
    </section>
  );
}
