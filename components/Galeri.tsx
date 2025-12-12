import { images } from "@/data/galeri";
import MasonryGallery from "./mvpblocks/masonry-grid-1";

export default function Galeri() {
  return (
    <section
      className="container min-h-screen mx-auto lg:w-5xl px-5 py-10"
      id="galeri"
    >
      <h1 className="lg:text-4xl text-3xl font-bold text-center mb-10">
        Galeri
      </h1>

      <MasonryGallery images={images} more={true} shouldSlice={true} />
    </section>
  );
}
