import Image from "next/image";
import aboutSvg from "@/public/assets/about.svg";
import SectionTitlle from "./SectionTitlle";
const About = () => {
  return (
    <div className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <Image src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitlle text="code and coffee" />
          <p className="text-slate-600 mt-8 loading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem laudantium minima, ratione sed eaque nulla aut, dolor
            minus delectus suscipit at officiis iusto dicta nam aliquam hic
            quidem sint perspiciatis!
          </p>
        </article>
      </div>
    </div>
  );
};
export default About;
