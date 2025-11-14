import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket, FaUsers } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      description:
        "Creating seamless experiences across all devices and platforms",
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Working effectively in teams to deliver quality solutions",
    },
  ];

  return (
    <section
      id="about"
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
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        {/* Centered Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6 mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white"
          >
            Full Stack Developer & Problem Solver
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed"
          >
            I'm a passionate Full Stack Developer with a keen eye for creating
            elegant solutions to complex problems. With expertise in modern web
            technologies, I specialize in building scalable and user-friendly
            applications.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed"
          >
            My journey in software development has equipped me with a diverse
            skill set, from front-end frameworks to back-end architectures. I
            thrive on learning new technologies and applying them to real-world
            challenges.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed"
          >
            When I'm not coding, I enjoy contributing to open-source projects,
            exploring new tech trends, and sharing knowledge with the developer
            community.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4 justify-center"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-blue-500 text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
