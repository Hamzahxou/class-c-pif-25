import MasonryGallery from "@/components/mvpblocks/masonry-grid-1";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Galeripage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  // Ambil parameter year dengan await
  const { year } = await params;
  return (
    <div className="container min-h-screen mx-auto lg:w-5xl px-5 py-10">
      <Breadcrumbs />
      <MasonryGallery more={false} dateparams={year} singlePage={true} />
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
