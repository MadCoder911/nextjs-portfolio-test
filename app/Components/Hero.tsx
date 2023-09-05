import Link from "next/link";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import heroImg from "@/public/assets/hero.svg";
console.log(heroImg);
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Ahmed</h1>
          <p className="mt-4 text-3xl text-slate-700 tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 captialize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <Link href="/#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </Link>
            <Link href="/#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </Link>
            <Link href="/#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </Link>
          </div>
        </article>
        <article className="hidden md:block">
          <Image src={heroImg} alt="Hero img" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
