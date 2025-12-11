"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function MasonryGallery({ images }: { images: string[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  return (
    <>
      <div className="columns-2 gap-4 space-y-4 transition-all sm:columns-2 md:columns-4 lg:columns-5">
        {images.map((src, index) => (
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
              src={src}
              alt={`Random ${index}`}
              className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out
            
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
                setUrl(src);
              }}
            />
          </motion.div>
        ))}
      </div>

      {isClicked && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setIsClicked(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            {/* <div
              className="absolute -top-10 right-0 flex h-9 w-9 items-center justify-center rounded-xl  overflow-hidden shadow-md bg-white"
              onClick={() => setIsClicked(false)}
            >
              <X className="h-6 w-6" />
            </div> */}

            <motion.img
              src={url}
              alt={`show`}
              className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out
            `}
              whileHover={{ scale: 1.05 }}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
