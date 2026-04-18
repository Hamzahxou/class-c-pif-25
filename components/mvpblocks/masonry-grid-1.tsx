"use client";

import { images2 } from "@/data/galeri";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Images, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const years = ["2025", "2026", "2027", "2028", "2029"];

interface ImageProps {
  url: string[];
  date: string;
}

export default function MasonryGallery({
  more = false,
  shouldSlice = false,
  dateparams,
  singlePage = false,
}: {
  more: boolean;
  shouldSlice?: boolean;
  dateparams?: string | null;
  singlePage?: boolean;
}) {
  const images = images2 as ImageProps[];
  const [hovered, setHovered] = useState<string | null>(null);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [dateSearch, setDateSearch] = useState<string>(dateparams || "2025");

  // 1. Optimasi Filter: Hanya berjalan jika images atau tahun berubah
  const displayedImages = useMemo(() => {
    const filtered = images
      .filter((img) => img.date === (singlePage ? dateparams : dateSearch))
      .flatMap((item) => item.url);

    return shouldSlice ? filtered.slice(0, 10) : filtered;
  }, [images, dateSearch, dateparams, singlePage, shouldSlice]);

  return (
    <>
      {/* Filter Tahun */}
      <div className="flex justify-center items-center gap-5 text-md py-5">
        {years.map((year) => {
          const isActive = singlePage
            ? year === dateparams
            : year === dateSearch;

          if (singlePage) {
            return (
              <Link
                key={year}
                href={`/galeri/${year}`}
                className={`${
                  isActive ? "text-primary font-bold" : "text-muted-foreground"
                } cursor-pointer transition-colors hover:text-primary`}
              >
                {year}
              </Link>
            );
          }

          return (
            <span
              key={year}
              onClick={() => setDateSearch(year)}
              className={`${
                isActive ? "text-primary font-bold" : "text-muted-foreground"
              } cursor-pointer transition-colors hover:text-primary`}
            >
              {year}
            </span>
          );
        })}
      </div>

      {/* Grid Masonry */}
      <div className="columns-2 gap-4 space-y-4 sm:columns-3 md:columns-4 lg:columns-5">
        <AnimatePresence mode="popLayout">
          {displayedImages.map((imageUrl, index) => {
            const fileName = imageUrl.split("/").pop()?.split(".")[0] || index;

            return (
              <motion.div
                key={imageUrl}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(imageUrl)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => setSelectedUrl(imageUrl)}
              >
                <Image
                  src={imageUrl}
                  alt={`Gallery ${fileName}`}
                  width={500} // Responsif berdasarkan container
                  height={700}
                  loading="lazy"
                  className={`w-full h-auto object-cover transition-all duration-500 
                    ${hovered && hovered !== imageUrl ? "blur-[2px] opacity-60" : "blur-0 scale-100"}
                    ${hovered === imageUrl ? "scale-110" : ""}
                  `}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Tombol Lihat Lebih Banyak */}
      {more && displayedImages.length >= 10 && (
        <div className="flex justify-center items-center mt-10">
          <Link href={`/galeri/${dateSearch}`}>
            <Button
              variant="secondary"
              className="flex gap-2 items-center text-black hover:bg-white/90"
            >
              <Images className="h-5 w-5" />
              Lihat Lebih Banyak
            </Button>
          </Link>
        </div>
      )}

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-110 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            onClick={() => setSelectedUrl(null)}
          >
            <button
              className="absolute top-5 right-5 z-110 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
              onClick={() => setSelectedUrl(null)}
            >
              <X className="h-8 w-8" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full h-[80vh]flex content-center place-items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedUrl}
                alt="Preview Full"
                width={1200}
                height={1200}
                priority
                className="rounded-2xl shadow-2xl
                 max-w-full max-h-[75vh]
                 w-auto h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
