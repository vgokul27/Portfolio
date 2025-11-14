import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";
import {
  SiC,
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiRender,
  SiVercel,
  SiFirebase,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skills = {
    Programming: [
      { name: "C", icon: <SiC />, color: "#A8B9CC" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
    ],
    "Web Development": [
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#000000" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    ],
    "Tools & Platforms": [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Render", icon: <SiRender />, color: "#46E3B7" },
      { name: "Vercel", icon: <SiVercel />, color: "#000000" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8"
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
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                {category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`grid gap-6 ${
                  category === "Programming"
                    ? "grid-cols-3 max-w-2xl mx-auto"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                }`}
              >
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.15,
                      transition: { duration: 0.3 },
                    }}
                    className="p-6 rounded-xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center justify-center group"
                  >
                    <motion.div
                      className="text-4xl mb-4"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </motion.div>
                    <p className="text-gray-300 text-center font-medium group-hover:text-blue-500 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
