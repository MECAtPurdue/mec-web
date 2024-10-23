import Image from "next/image";
import Poster from "@/public/index/poster.jpg";

const About = () => {
  return (
    <div className="container mx-auto bg-base-200 py-8 scroll-mt-16">
      <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
      <div className="container py-4 px-8 max-w-md md:max-w-3xl flex flex-wrap md:flex-nowrap justify-center mx-auto gap-16 content-center items-center">
        <Image
          src={Poster}
          className="max-w-sm rounded-lg shadow-2xl self-center w-60"
          alt="Poster"
        />
        <p className="text-lg mt-4 font-serif min-w-64 flex-grow">
          The Movie Enjoyers Club at Purdue is a community of film lovers who
          meet regularly to watch and discuss movies, from timeless classics to
          the latest blockbusters. Whether you&apos;re a cinema expert or just
          love a good flick, you&apos;re welcome here!
        </p>
      </div>
    </div>
  );
};

export default About;
