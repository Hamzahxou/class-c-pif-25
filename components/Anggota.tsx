// import { CardSwipe } from "@/components/ui/card-swipe";
import { CardCarousel } from "@/components/ui/card-carousel";
import { anggotaKelas } from "@/data/anggota";

export default function Anggota() {
  return (
    <section
      className="bg-gray-100 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] overflow-hidden py-16"
      id="anggota"
    >
      <div className="min-h-screen mx-auto lg:w-5xl px-5 py-10 ">
        <h1 className="lg:text-4xl text-3xl font-bold text-center mb-10">
          Anggota Kelas Kami
        </h1>

        <div className="mb-10">
          <div className="grid grid-cols-3 gap-2 lg:w-2xl mx-auto">
            <div className="flex items-center justify-center flex-col rounded-md  overflow-hidden shadow-sm p-5 transition-all">
              <h3 className="text-2xl font-bold mb-2 text-black/50">0</h3>
              <p className="text-xs text-nowrap font-normal text-black/50 lg:text-md">
                Tidak Aktif
              </p>
            </div>

            <div className="flex items-center justify-center flex-col rounded-md  overflow-hidden shadow-sm p-5 -translate-y-2 transition-all ">
              <h3 className="text-2xl font-bold mb-2">26</h3>
              <p className="text-xs text-nowrap font-normal lg:text-md">
                Aktif
              </p>
            </div>

            <div className="flex items-center justify-center flex-col rounded-md  overflow-hidden shadow-sm p-5 transition-all">
              <h3 className="text-2xl font-bold mb-2 text-black/50">0</h3>
              <p className="text-xs text-nowrap font-normal text-black/50 lg:text-md">
                Keluar
              </p>
            </div>
          </div>
        </div>

        <div>
          <CardCarousels />
        </div>
      </div>
    </section>
  );
}

function CardCarousels() {
  const images = anggotaKelas.map((anggota) => ({
    src: anggota.image,
    alt: anggota.name,
    description: anggota.description,
  }));

  return (
    <div className="">
      <CardCarousel
        images={images}
        autoplayDelay={5000}
        showPagination={false}
        showNavigation={true}
      />
    </div>
  );
}
