import Hero from "@/components/index/Hero";
import AboutUs from "@/components/index/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AboutUs />
      </main>
    </>
  );
}
