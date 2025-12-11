import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="container min-h-screen flex justify-center items-center mx-auto px-4"
      id="beranda"
    >
      <div className="relative bg-[url('/assets/bg.jpg')] bg-cover bg-bottom bg-no-repeat p-5 rounded-2xl shadow-2xl overflow-hidden  lg:w-5xl">
        {/* Overlay hitam */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Konten */}
        <div className="relative z-10 text-white px-5 py-10">
          <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di
            <br />
            Website PIF Cetar.
          </h1>

          <p className="mb-6">
            Website resmi Pendidikan Informatika kelas 1C. Tempat berbagi
            informasi, pengumuman, dokumentasi kegiatan, dan berbagai hal yang
            berkaitan dengan perjalanan akademik kita bersama.
          </p>
          <Link href="/#tentang">
            <Button
              variant={"outline"}
              className="flex gap-2 items-center text-black cursor-pointer hover:bg-white/90"
            >
              <Sparkles className="h-5 w-5 text-black" />
              Jelajahi web kami
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
