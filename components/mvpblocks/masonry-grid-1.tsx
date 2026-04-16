"use client";
import { images2 } from "@/data/galeri";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const years = ["2025", "2026", "2027", "2028", "2029"];

interface ImageProps {
  url: string[]; // Sesuai data Anda yang berupa Array
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
  const [hovered, setHovered] = useState<string | null>(null); // Menggunakan string (URL) sebagai id hover
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const [dateSearch, setDateSearch] = useState<string>(dateparams || "2025");

  // 1. Filter data berdasarkan tahun
  const filteredData = images.filter((img) => img.date === dateSearch);

  // 2. Karena data Anda nested (array di dalam array), kita perlu meratakannya (flatten)
  // agar Masonry columns-nya bekerja dengan benar untuk setiap gambar individu.
  const allImagesInYear = filteredData.flatMap((item) => item.url);

  // 3. Terapkan slice jika diperlukan
  const displayedImages = shouldSlice
    ? allImagesInYear.slice(0, 10)
    : allImagesInYear;

  return (
    <>
      {/* Filter Tahun */}
      <div className="flex justify-center items-center gap-5 text-md py-5">
        {singlePage
          ? years.map((year) => (
              <Link
                key={year}
                className={`${
                  year === dateparams
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                } cursor-pointer transition-colors`}
                href={`/galeri/${year}`}
              >
                {year}
              </Link>
            ))
          : years.map((year) => (
              <span
                key={year}
                className={`${
                  year === dateSearch
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                } cursor-pointer transition-colors`}
                onClick={() => setDateSearch(year)}
              >
                {year}
              </span>
            ))}
      </div>

      {/* Grid Masonry */}
      <div className="columns-2 gap-4 space-y-4 transition-all sm:columns-2 md:columns-4 lg:columns-5">
        {displayedImages.map((imageUrl, index) => {
          // Ambil nama file untuk alt (misal: "01" dari "/assets/galeri/2025/01.jpg")
          const fileName = imageUrl.split("/").pop()?.split(".")[0] || index;

          return (
            <motion.div
              key={imageUrl}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(imageUrl)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out"
            >
              <motion.img
                src={imageUrl}
                alt={String(fileName)}
                className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out cursor-pointer
                  ${
                    hovered === null
                      ? "blur-0 scale-100"
                      : hovered === imageUrl
                        ? "blur-0 scale-105"
                        : "blur-[1px] opacity-80"
                  }`}
                whileHover={{ scale: 1.05 }}
                loading="lazy"
                onClick={() => {
                  setIsClicked(true);
                  setSelectedUrl(imageUrl);
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Tombol Lihat Lebih Banyak */}
      {more && allImagesInYear.length > 10 && (
        <div className="flex justify-center items-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href={`/galeri/${dateSearch}`}>
              <Button
                variant={"secondary"}
                className="flex gap-2 items-center text-black cursor-pointer hover:bg-white/90"
              >
                <Images className="h-5 w-5 text-black" />
                Lihat Lebih Banyak
              </Button>
            </Link>
          </motion.div>
        </div>
      )}

      {/* Modal Preview */}
      {isClicked && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setIsClicked(false)}
        >
          {/* Close Button */}
          <div
            className="absolute top-5 right-5  flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer text-white"
            onClick={() => setIsClicked(false)}
          >
            <X className="h-8 w-8" />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedUrl}
              alt="Preview"
              // Masukkan angka besar sebagai referensi max-resolution
              width={1200}
              height={1200}
              priority
              className="rounded-2xl shadow-2xl 
                 max-w-full max-h-[75vh] 
                 w-auto h-auto object-contain"
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
