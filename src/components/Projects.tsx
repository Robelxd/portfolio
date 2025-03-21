import { FaJs, FaVuejs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiI18Next, SiVite, SiBootstrap, SiNuxtdotjs } from "react-icons/si";

const projects = [
  {
    title: "Muyategna",
    description:
      "A freelancing web platform that connects customers with professionals and handymen, enabling job posting, professional applications, and a subscription-based payment model.",
    image: "/images/moya1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaVuejs, SiI18Next, FaJs],
  },
  {
    title: "Maid Finder",
    description:
      "A web platform designed to connect customers with domestic help services, allowing users to find and hire maids, cleaners, and other household service providers easily.",
    image: "/images/md1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaJs, FaVuejs],
  },
];

const Projects = () => {
  return (
    <div className="py-20 px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col gap-10">
      <h2 className="text-green-500 text-3xl sm:text-4xl font-bold text-center">Projects</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#2f2e2e] rounded-lg p-6 shadow-lg hover:scale-[1.03] transition duration-300"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg mb-4 sm:mb-6 object-cover"
          />
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 text-center sm:text-left">{project.title}</h3>
          <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">{project.description}</p>
          <div className="flex gap-4 mt-4 justify-center sm:justify-start">
            {project.technologies.map((Icon, i) => (
              <Icon key={i} className="text-xl sm:text-2xl text-green-400 hover:text-green-500 transition duration-300" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
