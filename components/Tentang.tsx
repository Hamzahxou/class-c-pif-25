import Image from "next/image";
import about from "@/public/assets/about.jpg";
export default function Tentang() {
  return (
    <section className=" min-h-screen mx-auto lg:w-5xl px-5 py-10" id="tentang">
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
          Berawal dari ruang kelas yang sama di program studi Pendidikan
          Informatika, Kelas C tumbuh menjadi wadah yang penuh dengan vibe
          positif dan solidaritas tinggi. Kami percaya bahwa belajar bukan hanya
          soal teori di depan layar, tapi tentang bagaimana kami berproses
          bersama dalam praktik, bereksperimen dengan teknologi baru, dan saling
          mendukung dalam setiap langkah studi. Di Kelas C, setiap individu
          membawa warna unik yang menciptakan harmoni dalam kebersamaan. Kami
          hadir untuk melampaui batas, membangun kepercayaan diri, dan
          bertransformasi menjadi calon ahli informatika yang kreatif dan
          solutif.
        </p>
      </div>
    </section>
  );
}
