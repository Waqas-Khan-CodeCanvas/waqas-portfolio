
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaCode, FaLaptopCode } from "react-icons/fa";

const Certifications = () => {
  return (
    <div className="mt-10 pt-5 md:px-10">
      <h1 className="text-white text-5xl font-extrabold mb-8 border-b-4 border-lime-400 pb-2 w-max">
        My Projects
      </h1>

      <div className="mt-10 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg border-b-4 border-lime-400 hover:shadow-2xl transition-all duration-500"
            >
              <Image
                className="w-full h-64 object-cover rounded-md"
                src={proj.image}
                width={500}
                height={400}
                alt={proj.title}
              />

              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white text-center flex items-center gap-2">
                  <FaCode /> {proj.title}
                </h3>
                <p className="text-gray-300 text-center">{proj.description}</p>
                <Link href={proj.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 px-4 py-2 text-sm font-semibold text-white bg-lime-500 rounded-md hover:bg-lime-600 transition flex items-center gap-2">
                    View Project <FaExternalLinkAlt />
                  </button>
                </Link>
              </div>
            </div>
            
          ))}
            <Link href="/" target="_blank" rel="noopener noreferrer">
                </Link>
                <Link href="https://github.com/Waqas-Khan-CodeCanvas/JavaScript-Projects-2025" target="_blank" rel="noopener noreferrer">
                  <button className="mx-auto mt-3 px-4 py-2 text-sm font-semibold text-white bg-lime-500 rounded-md hover:bg-lime-600 transition flex items-center gap-2">
                    View more <FaExternalLinkAlt />
                  </button>
                </Link>
        </div>
      </div>

      {/*************** Self-Learned Projects Section **************/}
      <div className="mt-16 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-lime-400 flex items-center gap-2">
          <FaLaptopCode /> Self-Learned Projects
        </h2>
        <p className="text-gray-300 mt-4">
          I have taken the initiative to learn Laravel, PHP, and MySQL on my own, building various real-world projects. These projects have helped me gain practical experience in backend development, database management, and full-stack web applications.
        </p><Link href="/" target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 px-4 py-2 text-sm font-semibold text-white bg-lime-500 rounded-md hover:bg-lime-600 transition flex items-center gap-2">
                    Let's See <FaExternalLinkAlt />
                  </button>
                </Link>
      </div>
    
    </div>
  );
};

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce website with authentication, product management, and payment integration.",
    image: "/ecommerce.png",
    link: "https://github.com/waqas-khan/ecommerce-site",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills, projects, and experience, built with Next.js and Tailwind CSS.",
    image: "/portfolio.png",
    link: "https://github.com/waqas-khan/portfolio",
  },
  {
    title: "Task Management App",
    description: "A task management tool with user authentication, task tracking, and analytics dashboard.",
    image: "/task-manager.png",
    link: "https://github.com/waqas-khan/task-manager",
  },
  {
    title: "Blog CMS",
    description: "A content management system for blogs with admin controls, post management, and user authentication.",
    image: "/blog-cms.png",
    link: "https://github.com/waqas-khan/blog-cms",
  },
  {
    title: "AI-Powered Chatbot",
    description: "A chatbot integrated with AI for customer service automation and smart responses.",
    image: "/chatbot.png",
    link: "https://github.com/waqas-khan/ai-chatbot",
  },
  {
    title: "Online Course Platform",
    description: "A platform for online learning, including video courses, quizzes, and certifications.",
    image: "/course-platform.png",
    link: "https://github.com/waqas-khan/online-courses",
  },
];

export default Certifications;