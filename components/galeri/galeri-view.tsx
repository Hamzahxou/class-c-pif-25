"use client";
import MasonryGallery from "@/components/mvpblocks/masonry-grid-1";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSearchParams } from "next/navigation";

interface ImageProps {
  url: string;
  date: string;
}

export default function GaleriView({ images }: { images: ImageProps[] }) {
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || "";
  return (
    <>
      <Breadcrumbs />
      <MasonryGallery images={images} more={false} dateparams={date} />
    </>
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
