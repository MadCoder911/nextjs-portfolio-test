import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
type Project = {
  url: string;
  img: any;
  github: string;
  title: string;
  text: string;
};
const ProjectCard = ({ url, img, github, title, text }: Project) => {
  return (
    <section className="bg-white rounded-lg shadow-md hover:shadow-xl duration-200 cursor-pointer">
      <Image
        width={400}
        height={400}
        src={img}
        alt="project image"
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-cl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <Link href={url}>
            <TbWorldWww className="w-8 h-8 text-slate-500 hover:text-black duration-200" />
          </Link>
          <Link href={github}>
            <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ProjectCard;
