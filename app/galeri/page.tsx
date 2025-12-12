import GaleriView from "@/components/galeri/galeri-view";
import { images } from "@/data/galeri";

export default function Galeripage() {
  return (
    <div className="container min-h-screen mx-auto lg:w-5xl px-5 py-10">
      <GaleriView images={images} />
    </div>
  );
}
