import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techIcons = {
    "React.js": { icon: <SiReact />, color: "#61DAFB" },
    Tailwind: { icon: <SiTailwindcss />, color: "#06B6D4" },
    "Framer Motion": { icon: <TbBrandFramerMotion />, color: "#FF0055" },
    "Node.js": { icon: <SiNodedotjs />, color: "#339933" },
    "Express.js": { icon: <SiExpress />, color: "#FFFFFF" },
    MongoDB: { icon: <SiMongodb />, color: "#47A248" },
    Firebase: { icon: <SiFirebase />, color: "#FFCA28" },
  };

  const projects = [
    {
      title: "Doofie",
      description: "A smart recipe finder",
      image: "doofie.png",
      techStack: [
        "React.js",
        "Tailwind",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      liveDemo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/doofie",
    },
    {
      title: "I Hate PDF",
      description: "File conversion app",
      image: "ihate.png",
      techStack: [
        "React.js",
        "Tailwind",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveDemo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/i-hate-pdf",
    },
    {
      title: "Ink Diaries",
      description: "A personal blog site",
      image: "ink.png",
      techStack: [
        "React.js",
        "Tailwind",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      liveDemo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/ink-diaries",
    },
    
    {
      title: "CGPA Calculator",
      description: "Simple CGPA calculator",
      image: "cgpa.png",
      techStack: ["React.js", "Tailwind", "Framer Motion"],
      liveDemo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/cgpa-calculator",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-800 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">Some of my recent work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-sm"
                      style={{ color: techIcons[tech]?.color }}
                    >
                      <span className="text-xl">{techIcons[tech]?.icon}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
