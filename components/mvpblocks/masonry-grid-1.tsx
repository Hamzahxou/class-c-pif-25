"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const years = ["2025", "2026", "2027", "2028", "2029"];

interface ImageProps {
  url: string;
  date: string;
}

export default function MasonryGallery({
  images,
  more = false,
  shouldSlice = false,
  dateparams,
}: {
  images: ImageProps[];
  more: boolean;
  shouldSlice?: boolean;
  dateparams?: string | null;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [dateSearch, setDateSearch] = useState<string>(dateparams || "2025");

  return (
    <>
      <div className="flex justify-center items-center gap-5 text-md py-5">
        {years.map((year) => (
          <span
            key={year}
            className={`${
              year === dateSearch ? "text-primary" : "text-muted-foreground"
            } cursor-pointer`}
            onClick={() => setDateSearch(year)}
          >
            {year}
          </span>
        ))}
      </div>

      <div className="columns-2 gap-4 space-y-4 transition-all sm:columns-2 md:columns-4 lg:columns-5">
        {images
          .filter((img) => img.date === dateSearch)
          .slice(shouldSlice ? 0 : undefined, shouldSlice ? 10 : undefined)
          .map(({ url }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out "
            >
              <motion.img
                src={url}
                alt={`Random ${index}`}
                className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out
                cursor-pointer
                    ${
                      hovered === null
                        ? "blur-0 scale-100"
                        : hovered === index
                        ? "blur-0 scale-105"
                        : "blur-0"
                    }`}
                whileHover={{ scale: 1.05 }}
                loading="lazy"
                onClick={() => {
                  setIsClicked(true);
                  setUrl(url);
                }}
              />
            </motion.div>
          ))}
      </div>

      {more && images.filter((img) => img.date === dateSearch).length >= 10 && (
        <div className="flex justify-center items-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
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

      {isClicked && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center  bg-black/50 p-4 backdrop-blur-sm max-h-screen overflow-hidden"
          onClick={() => setIsClicked(false)}
        >
          <div
            className="absolute top-0 m-5 right-0 flex h-9 w-9 items-center justify-center rounded-xl  verflow-hidden shadow-md bg-white/50 cursor-pointer"
            onClick={() => setIsClicked(false)}
          >
            <X className="h-6 w-6" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={url}
              alt={`show`}
              width={500}
              height={500}
              className={` rounded-lg object-cover transition-all duration-300 ease-in-out  
            `}
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
