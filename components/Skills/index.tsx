import { Brain, Code, Database, Cpu, ShieldCheck, Users } from "lucide-react";

const skillsData = [
  {
    category: "Professional Skills",
    icon: <ShieldCheck size={24} className="text-lime-400" />, 
    skills: [
      "Analytical Thinking",
      "Critical Thinking",
      "Creative Thinking",
      "Decision-Making",
      "Problem-Solving",
      "Logical Reasoning",
      "Strategic Planning",
      "Research",
      "Time Management",
      "Attention to Detail",
      "Adaptability",
      "Collaboration",
      "Communication",
      "Leadership",
      "Risk Management",
      "Continuous Learning",
    ],
  },
  {
    category: "Web Development",
    icon: <Code size={24} className="text-lime-400" />, 
    skills: [
      "HTML",
      "CSS",
      "Bootstrap5",
      "Tailwind4",
      "JavaScript",
      "Vue3",
      "Nuxt",
      "shadcn",
      "PHP",
      "Laravel",
      "MySQL",
      "Python",
      "Flask",
      "Git",
    ],
  },
  {
    category: "Artificial Intelligence",
    icon: <Cpu size={24} className="text-lime-400" />, 
    skills: [
      "Python",
      "Flask",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Statistics",
      "Linear Algebra",

    ],
  },
];

const Skills = () => {
  return (
    <div className="mt-10 px-5 md:px-10">
      <h1 className="text-white text-5xl font-extrabold mb-8 border-b-4 border-lime-400 pb-2 w-max">
        My Skills
      </h1>

      <div className="mt-10 space-y-8 text-white">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h5 className="text-2xl font-bold tracking-tight text-lime-400">
                {section.category.toUpperCase()}
              </h5>
            </div>
            <div className="flex flex-wrap gap-4 p-2">
              {section.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="rounded-lg px-4 py-2 cursor-pointer border-2 border-lime-400 bg-gray-700 hover:bg-lime-500 hover:text-black transition-all duration-300 shadow-md hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;