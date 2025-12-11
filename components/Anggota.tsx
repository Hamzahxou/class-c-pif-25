// import { CardSwipe } from "@/components/ui/card-swipe";
import { CardCarousel } from "@/components/ui/card-carousel";

export default function Anggota() {
  return (
    <section className="bg-gray-100/50" id="anggota">
      <div className="container min-h-screen mx-auto lg:w-5xl px-5 py-10 ">
        <h1 className="lg:text-4xl text-3xl font-bold text-center mb-10">
          Anggota Kelas Kami
        </h1>

        <div className="mb-10">
          <div className="grid grid-cols-3 gap-2 lg:w-2xl mx-auto">
            <div className="flex items-center justify-center flex-col rounded-md  overflow-hidden shadow-sm p-5 hover:-translate-y-1 transition-all ">
              <h3 className="text-2xl font-bold mb-2">26</h3>
              <p className="text-xs text-nowrap font-normal lg:text-md">
                Aktif
              </p>
            </div>
            <div className="flex items-center justify-center flex-col rounded-md  overflow-hidden shadow-sm p-5 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-2">0</h3>
              <p className="text-xs text-nowrap font-normal lg:text-md">
                Non Aktif
              </p>
            </div>
            <div className="flex items-center justify-center flex-col rounded-md  overflow-hidden shadow-sm p-5 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-2">0</h3>
              <p className="text-xs text-nowrap font-normal lg:text-md">
                Drop Out
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* <CardSwipes /> */}
          <CardCarousels />
        </div>
      </div>
    </section>
  );
}

// function CardSwipes() {
//   const images = [
//     { src: "/assets/anggota/contoh-1.png", alt: "Image 1" },
//     { src: "/assets/anggota/contoh-2.png", alt: "Image 2" },
//     { src: "/assets/anggota/contoh-3.png", alt: "Image 3" },
//   ];

//   return (
//     <div className="w-full">
//       <CardSwipe images={images} autoplayDelay={10000} slideShadows={false} />
//     </div>
//   );
// }

function CardCarousels() {
  const images = [
    { src: "/assets/anggota/contoh-1.png", alt: "Image 1" },
    { src: "/assets/anggota/contoh-2.png", alt: "Image 2" },
    { src: "/assets/anggota/contoh-3.png", alt: "Image 3" },
  ];

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
