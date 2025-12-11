import MasonryGallery from "./mvpblocks/masonry-grid-1";

const images = [
  "/assets/galeri/01.jpg",
  "/assets/galeri/02.jpg",
  "/assets/galeri/04.jpg",
  "/assets/galeri/05.jpg",
  "/assets/galeri/06.jpg",
  "/assets/galeri/07.jpg",
  "/assets/galeri/03.jpg",
];

export default function Galeri() {
  return (
    <section
      className="container min-h-screen mx-auto lg:w-5xl px-5 py-10"
      id="galeri"
    >
      <h1 className="lg:text-4xl text-3xl font-bold text-center mb-10">
        Galeri
      </h1>

      <MasonryGallery images={images} />
    </section>
  );
}
