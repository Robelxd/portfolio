import { FaJs, FaVuejs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiI18Next, SiVite, SiBootstrap, SiNuxtdotjs } from "react-icons/si";

const projects = [
  {
    title: "Muyategna",
    description: "A freelancing platform that connects professionals with customers...",
    image: "src/assets/profile.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaVuejs, SiI18Next, FaJs], // FaVuejs used for Pinia
  },
  {
    title: "Maid Finder",
    description: "A web app that helps customers find domestic help...",
    image: "/maidfinder.png",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaJs, FaVuejs],
  },
  {
    title: "Portfolio",
    description: "My personal portfolio showcasing projects and skills...",
    image: "/portfolio.png",
    technologies: [FaReact, SiTailwindcss, SiVite, SiBootstrap],
  },
];

const Projects = () => {
  return (
    <div className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#121212] rounded-lg p-6 shadow-lg hover:scale-105 transition transform duration-300"
        >
          <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
          <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
          <div className="flex gap-4 mt-4">
            {project.technologies.map((Icon, i) => (
              <Icon key={i} className="text-xl text-green-400 hover:text-green-500 transition duration-300" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
