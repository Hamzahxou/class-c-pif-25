import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* bg-[#f9fafb] */}
      <div className="min-h-screen w-full   absolute -z-50">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          }}
        />
      </div>

      <section
        className="min-h-screen flex justify-center items-center mx-auto px-4 relative"
        id="beranda"
      >
        <div className="relative bg-[url('/assets/bg.jpg')] bg-cover bg-bottom bg-no-repeat p-5 rounded-2xl shadow-2xl overflow-hidden lg:w-5xl">
          {/* Overlay hitam */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Konten */}
          <div className="relative z-10 text-white px-5 py-10">
            <h1 className="text-4xl font-bold mb-4">
              Selamat Datang di
              <br />
              Website PIF Cetar.
            </h1>

            <p className="mb-6">
              Lebih dari sekadar kelas, kami adalah keluarga. Selamat datang di
              portal resmi Pendidikan Informatika Kelas C—wadah untuk
              mengabadikan setiap momen, karya, dan cerita inspiratif dalam
              perjalanan akademik kami.
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

        <span className="from-primary/20 absolute inset-x-0 bottom-0 left-0 -z-10 h-1/3 w-full bg-linear-to-t mask-[linear-gradient(to_bottom,transparent,black_10%,black_10%,transparent)]" />
      </section>
    </>
  );
}
