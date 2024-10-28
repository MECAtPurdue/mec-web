import HeroBG from "@/public/index/hero-bg.jpg";
import Image from "next/image";

export default function HeroSectionGradientBackground() {
  return (
    <>
      <section className="relative w-full h-[80svh] flex items-center justify-center">
        <Image
          src={HeroBG}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          width="1600"
          height="800"
          style={{ aspectRatio: "1600/800", objectFit: "cover" }}
        />
        <div className="relative z-10 text-center px-4 md:px-6">
          <div className="container mx-auto space-y-4">
            <h1 className="text-4xl font-bold text-gray-50 sm:text-5xl md:text-6xl">
              Movie Enjoyers Club at Purdue
            </h1>
            <p className="text-lg text-gray-200 max-w-xl mx-auto md:text-xl">
              Where film lovers unite!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
