import MasonryGallery from "@/components/mvpblocks/masonry-grid-1";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { images } from "@/data/galeri";

export default function Galeripage({ params }: { params: { date: string } }) {
  const { date } = params;
  return (
    <div className="container min-h-screen mx-auto lg:w-5xl px-5 py-10">
      <Breadcrumbs />
      <MasonryGallery images={images} more={false} dateparams={date} />
    </div>
  );
}

function Breadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>galeri</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
