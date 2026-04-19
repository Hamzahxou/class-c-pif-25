import Anggota from "@/components/Anggota";
import Galeri from "@/components/Galeri";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Kontak from "@/components/Kontak";
import Pertanyaan from "@/components/Pertanyaan";
import Tentang from "@/components/Tentang";

export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <Hero />

        <Tentang />

        <Anggota />

        <Galeri />

        <Pertanyaan />

        <Kontak />
      </main>
    </>
  );
}
