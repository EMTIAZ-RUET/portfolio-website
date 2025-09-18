import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  CpuChipIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline';

const Resume = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Rajshahi University of Engineering & Technology (RUET)",
      period: "2018 - 2023",
      description: "Specialized in AI/ML, Deep Learning, and Software Engineering"
    }
  ];

  const experience = [
    {
      title: "AI/ML Engineer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: [
        "Developed and deployed Large Language Models reducing HR workload by 60%",
        "Optimized model inference speed achieving 2x performance boost",
        "Built end-to-end ML pipelines using PyTorch and TensorFlow"
      ]
    },
    {
      title: "Deep Learning Intern",
      company: "Innovation Labs",
      period: "2022 - 2023",
      description: [
        "Implemented computer vision models for object detection",
        "Worked on NLP projects using transformers and LangChain",
        "Collaborated with research team on cutting-edge AI projects"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "Java", "C++", "SQL"],
    "AI/ML Frameworks": ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Hugging Face"],
    "Deep Learning": ["Transformers", "CNNs", "RNNs", "GANs", "Attention Mechanisms"],
    "LLM & NLP": ["LangChain", "OpenAI API", "BERT", "GPT", "Text Processing"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "MLflow", "Git"],
    "Web Technologies": ["React", "Node.js", "REST APIs", "MongoDB", "PostgreSQL"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      id="resume" 
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-dark-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-primary">
              Resume
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My educational background, professional experience, and technical expertise
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors duration-300"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education & Experience */}
            <div className="space-y-12">
              {/* Education */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    <AcademicCapIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                </div>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Experience */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    <BriefcaseIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
                </div>
                
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {exp.period}
                      </p>
                      <ul className="space-y-1">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <CodeBracketIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
              </div>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <CpuChipIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;