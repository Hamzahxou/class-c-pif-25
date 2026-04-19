"use client";

import { motion } from "framer-motion";
// import { Mail } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import FAQItem from "@/components/mvpblocks/faq-3";
// import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function PertanyaanView({ faqs }: { faqs: FAQItemProps[] }) {
  return (
    <section
      className="bg-gray-100/80 relative mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] overflow-hidden py-16"
      id="pertanyaan"
    >
      {/* Decorative elements */}
      <div className="bg-primary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-primary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

      <div className="relative container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="text-black text-3xl font-bold mb-2">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-muted-foreground text-sm">
            Semua yang perlu Anda ketahui tentang kelas C
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        {/* fitur belum siap di publish */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn("mx-auto mt-12 max-w-md rounded-lg p-6 text-center")}
        >
          <div className="bg-primary/10 text-primary mb-4 inline-flex items-center justify-center rounded-full p-2">
            <Mail className="h-4 w-4" />
          </div>
          <p className="text-foreground mb-1 text-sm font-medium">
            Masih ada pertanyaan?
          </p>
          <p className="text-muted-foreground mb-4 text-xs">
            Kami di sini untuk membantu Anda
          </p>
          <button
            type="button"
            className={cn(
              "rounded-md px-4 py-2 text-sm",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90",
              "transition-colors duration-200",
              "font-medium",
            )}
          >
            Hubungi Dukungan
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
