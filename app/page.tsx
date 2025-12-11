import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tentang from "@/components/Tentang";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#f9fafb] absolute -z-50">
        {/* Diagonal Fade Grid Background - Top Right */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          }}
        />
        {/* Your Content/Components */}
      </div>

      <Header />

      <Hero />

      <Tentang />
    </>
  );
}
