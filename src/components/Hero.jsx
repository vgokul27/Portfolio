import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-blue-500 text-xl md:text-2xl font-medium mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Gokulraj V
              </h1>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-semibold text-gray-300"
            >
              Full Stack Developer
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Crafting innovative web solutions with modern technologies.
              Passionate about creating seamless user experiences and robust
              applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Work
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 pt-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#10b981" }}
                className="text-gray-400 text-3xl hover:text-blue-500 transition-colors duration-300"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#10b981" }}
                className="text-gray-400 text-3xl hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.2, color: "#10b981" }}
                className="text-gray-400 text-3xl hover:text-blue-500 transition-colors duration-300"
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo Card */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gray-800 rounded-2xl p-2 shadow-2xl">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden border-4 border-blue-500">
                  <img
                    src="/profile.jpg"
                    alt="Gokulraj V"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-blue-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-blue-500 rounded-full opacity-20"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
