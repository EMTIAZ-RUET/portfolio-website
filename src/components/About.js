import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/animations.css';
import { 
  CpuChipIcon, 
  CodeBracketIcon, 
  CloudIcon, 
  ChartBarIcon,
  AcademicCapIcon,
  TrophyIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CogIcon,
  DocumentTextIcon,
  CircleStackIcon,
  ServerIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [expandedProjects, setExpandedProjects] = useState({});

  // Tech icons mapping for better visual representation
  const techIcons = {
    'PyTorch': <CpuChipIcon className="w-4 h-4" />,
    'TensorFlow': <CpuChipIcon className="w-4 h-4" />,
    'LangGraph': <CommandLineIcon className="w-4 h-4" />,
    'LangChain': <CommandLineIcon className="w-4 h-4" />,
    'Python': <CodeBracketIcon className="w-4 h-4" />,
    'JavaScript': <CodeBracketIcon className="w-4 h-4" />,
    'AWS': <CloudIcon className="w-4 h-4" />,
    'Docker': <ServerIcon className="w-4 h-4" />,
    'Kubernetes': <CogIcon className="w-4 h-4" />,
    'RAG': <DocumentTextIcon className="w-4 h-4" />,
    'Vector DB': <CircleStackIcon className="w-4 h-4" />,
    'FastAPI': <ServerIcon className="w-4 h-4" />,
    'React': <DevicePhoneMobileIcon className="w-4 h-4" />
  };

  const skills = [
    {
      category: 'AI/ML Expertise',
      icon: <CpuChipIcon className="w-8 h-8" />,
      items: [
        { name: 'Large Language Models', level: 95, color: 'from-blue-500 to-purple-600' },
        { name: 'Transformers & Embeddings', level: 92, color: 'from-purple-500 to-pink-600' },
        { name: 'RAG & RLHF', level: 90, color: 'from-green-500 to-blue-600' },
        { name: 'Multi-Agent Systems', level: 88, color: 'from-yellow-500 to-red-600' }
      ]
    },
    {
      category: 'Deep Learning',
      icon: <SparklesIcon className="w-8 h-8" />,
      items: [
        { name: 'CNNs, RNNs, GANs', level: 90, color: 'from-indigo-500 to-blue-600' },
        { name: 'Multi-modal AI', level: 85, color: 'from-pink-500 to-red-600' },
        { name: 'Speech Systems (STT/TTS)', level: 88, color: 'from-teal-500 to-green-600' },
        { name: 'Computer Vision', level: 82, color: 'from-orange-500 to-yellow-600' }
      ]
    },
    {
      category: 'Frameworks & Tools',
      icon: <CodeBracketIcon className="w-8 h-8" />,
      items: [
        { name: 'PyTorch, TensorFlow, JAX', level: 93, color: 'from-red-500 to-pink-600' },
        { name: 'LangChain & LangGraph', level: 90, color: 'from-blue-500 to-indigo-600' },
        { name: 'Hugging Face Ecosystem', level: 88, color: 'from-green-500 to-teal-600' },
        { name: 'Vector DBs (FAISS, Pinecone)', level: 85, color: 'from-purple-500 to-blue-600' }
      ]
    },
    {
      category: 'Cloud & MLOps',
      icon: <CloudIcon className="w-8 h-8" />,
      items: [
        { name: 'AWS (ECS, EKS, Lambda)', level: 87, color: 'from-orange-500 to-red-600' },
        { name: 'Docker & Kubernetes', level: 85, color: 'from-blue-500 to-purple-600' },
        { name: 'MLOps Pipelines', level: 82, color: 'from-green-500 to-blue-600' },
        { name: 'Model Optimization', level: 90, color: 'from-yellow-500 to-orange-600' }
      ]
    }
  ];

  const experiences = [
    {
      company: 'Brainstation 23 PLC',
      role: 'AI Division',
      period: 'Mar 2024 – Present',
      location: 'Dhaka',
      projects: [
        {
          title: 'AI Interview Agent',
          description: 'Built AI-powered interview assistant with real-time evaluation',
          impact: '60% reduction in HR workload',
          tech: ['LangGraph', 'LangChain', 'Agentic Workflows']
        },
        {
          title: 'E-commerce Agent',
          description: 'Developed interactive shopping assistant with personalization',
          impact: 'Improved conversion efficiency',
          tech: ['RAG', 'Retrieval Pipelines', 'Real-time AI']
        },
        {
          title: 'Property Tech Agent',
          description: 'Domain-specific property search with contextual filters',
          impact: 'Enhanced user experience',
          tech: ['Contextual AI', 'Multi-turn Dialogues']
        }
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      company: 'Neural Network Ltd.',
      role: 'AI/ML Engineer',
      period: 'Nov 2021 – Feb 2024',
      location: 'Dhaka',
      projects: [
        {
          title: 'LLM Development & Optimization',
          description: 'Built and fine-tuned transformer models for various applications',
          impact: '2x inference latency reduction',
          tech: ['GPT', 'BERT', 'T5', 'Model Quantization']
        },
        {
          title: 'Multi-Modal AI Systems',
          description: 'Developed vision + text + speech integrated models',
          impact: 'Cross-modal embedding systems',
          tech: ['CNNs', 'RNNs', 'Speech Recognition']
        },
        {
          title: 'AI Infrastructure',
          description: 'Deployed ML systems at scale with high availability',
          impact: '40% downtime reduction',
          tech: ['AWS', 'Microservices', 'MLOps']
        }
      ],
      color: 'from-green-500 to-blue-600'
    }
  ];

  const achievements = [
    {
      title: 'ICPC Asia Dhaka Regional 2022',
      description: 'Ranked 33rd among 150+ teams',
      icon: <TrophyIcon className="w-6 h-6" />,
      color: 'text-yellow-500'
    },
    {
      title: 'HackNSU 2023',
      description: 'Top 10 Finalist - Real-time disaster relief platform',
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      color: 'text-purple-500'
    },
    {
      title: 'LeetCode Expert',
      description: '1700+ problems solved, Max rating 1986',
      icon: <ChartBarIcon className="w-6 h-6" />,
      color: 'text-green-500'
    },
    {
      title: 'National Hackathon Finalist',
      description: 'AI-based traffic monitoring system',
      icon: <SparklesIcon className="w-6 h-6" />,
      color: 'text-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-300/20 to-purple-300/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-green-300/20 rounded-full"
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-700 rounded-full shadow-lg mb-6"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <AcademicCapIcon className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">About Me</span>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent">
                Crafting AI Solutions
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Passionate about pushing the boundaries of Generative AI and solving complex problems 
              with cutting-edge machine learning technologies.
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skills.map((skillCategory, categoryIndex) => (
                <motion.div
                  key={skillCategory.category}
                  className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {skillCategory.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {skillCategory.category}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-primary-600">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="relative h-3 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                          >
                            <motion.div
                              className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-20">
            <motion.h3
              className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Professional Journey
            </motion.h3>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-blue-600 rounded-full shadow-lg"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />

              <div className="space-y-20">
                {experiences.map((exp, index) => {
                  const isLeft = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      className="relative flex items-stretch"
                      initial={{ 
                        opacity: 0, 
                        x: isLeft ? -100 : 100,
                        scale: 0.8
                      }}
                      animate={inView ? { 
                        opacity: 1, 
                        x: 0,
                        scale: 1
                      } : { 
                        opacity: 0, 
                        x: isLeft ? -100 : 100,
                        scale: 0.8
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.3,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      {/* Card Container */}
                      <div className={`flex-1 ${isLeft ? 'pr-8 md:pr-12' : 'pl-8 md:pl-12'} ${isLeft ? '' : 'flex justify-end'}`}>
                        <motion.div
                          className={`timeline-card card-3d relative max-w-lg w-full bg-gradient-to-br from-white to-gray-50 dark:from-dark-700 dark:to-dark-600 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-dark-600 overflow-hidden group float-animation`}
                          whileHover={{ 
                            y: -8, 
                            scale: 1.02,
                            rotateY: isLeft ? 5 : -5,
                            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)"
                          }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                        >
                          {/* Animated Background Gradient */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
                            initial={false}
                          />
                          
                          {/* Floating Particles */}
                          <div className="absolute inset-0 overflow-hidden rounded-3xl">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`absolute w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full opacity-20`}
                                animate={{
                                  x: [0, Math.random() * 100 - 50],
                                  y: [0, Math.random() * 100 - 50],
                                  scale: [0, 1, 0],
                                  opacity: [0, 0.3, 0]
                                }}
                                transition={{
                                  duration: 4 + Math.random() * 2,
                                  repeat: Infinity,
                                  delay: i * 0.5,
                                  ease: "easeInOut"
                                }}
                                style={{
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`
                                }}
                              />
                            ))}
                          </div>

                          {/* Company Header */}
                          <motion.div 
                            className="flex items-center gap-4 mb-6"
                            whileHover={{ scale: 1.02 }}
                          >
                            <motion.div
                              className={`relative w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}
                              whileHover={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <motion.div
                                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  rotate: [0, 180, 360]
                                }}
                                transition={{ 
                                  duration: 4, 
                                  repeat: Infinity,
                                  ease: "easeInOut" 
                                }}
                              >
                                <div className="w-3 h-3 bg-white rounded-full" />
                              </motion.div>
                              
                              {/* Pulsing Ring */}
                              <motion.div
                                className={`absolute inset-0 rounded-2xl border-2 border-white/30`}
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [1, 0.3, 1]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity 
                                }}
                              />
                            </motion.div>
                            
                            <div className="flex-1">
                              <motion.h4 
                                className="gradient-shift text-2xl font-bold mb-1"
                                whileHover={{ scale: 1.05 }}
                              >
                                {exp.company}
                              </motion.h4>
                              <motion.p 
                                className="text-primary-600 dark:text-primary-400 font-semibold text-lg"
                                whileHover={{ scale: 1.05 }}
                              >
                                {exp.role}
                              </motion.p>
                              <div className="flex items-center gap-4 mt-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                  📍 {exp.location}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                  📅 {exp.period}
                                </span>
                              </div>
                            </div>
                          </motion.div>

                          {/* Projects Grid */}
                          <div className="space-y-4">
                            <motion.h5 
                              className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2"
                              whileHover={{ x: 5 }}
                            >
                              🚀 Key Projects
                              <motion.div
                                className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                              />
                            </motion.h5>
                            
                            {exp.projects.map((project, projectIndex) => (
                              <motion.div
                                key={projectIndex}
                                className={`relative bg-white/80 dark:bg-dark-600/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50 dark:border-gray-600/50 cursor-pointer transition-all duration-300 hover:shadow-lg group/project`}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                                transition={{ 
                                  duration: 0.6, 
                                  delay: index * 0.2 + projectIndex * 0.15,
                                  type: "spring",
                                  stiffness: 150
                                }}
                                whileHover={{ 
                                  scale: 1.03,
                                  y: -3,
                                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)"
                                }}
                                onClick={() => {
                                  const key = `${index}-${projectIndex}`;
                                  setExpandedProjects(prev => ({
                                    ...prev,
                                    [key]: !prev[key]
                                  }));
                                }}
                              >
                                {/* Project Header */}
                                <div className="flex items-start justify-between mb-3">
                                  <motion.h6 
                                    className="font-bold text-gray-800 dark:text-white text-lg flex items-center gap-2"
                                    whileHover={{ color: "#3B82F6" }}
                                  >
                                    <motion.div
                                      className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full`}
                                      animate={{ 
                                        scale: [1, 1.3, 1],
                                        opacity: [1, 0.7, 1]
                                      }}
                                      transition={{ 
                                        duration: 2, 
                                        repeat: Infinity 
                                      }}
                                    />
                                    {project.title}
                                  </motion.h6>
                                  
                                  <motion.div
                                    animate={{ 
                                      rotate: expandedProjects[`${index}-${projectIndex}`] ? 180 : 0 
                                    }}
                                    className="text-primary-600 cursor-pointer"
                                  >
                                    ▼
                                  </motion.div>
                                </div>
                                
                                <motion.p 
                                  className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed"
                                  initial={false}
                                >
                                  {project.description}
                                </motion.p>
                                
                                {/* Tech Stack */}
                                <motion.div 
                                  className="flex flex-wrap gap-2 mb-3"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  {project.tech.map((tech, techIndex) => (
                                    <motion.div
                                      key={tech}
                                      className="group relative"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: techIndex * 0.1 }}
                                    >
                                      <motion.span
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-dark-600 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        whileHover={{ 
                                          scale: 1.05,
                                          y: -1
                                        }}
                                      >
                                        {techIcons[tech] || <CodeBracketIcon className="w-4 h-4" />}
                                        <span>{tech}</span>
                                      </motion.span>
                                    </motion.div>
                                  ))}
                                </motion.div>
                                
                                {/* Impact Badge */}
                                <motion.div 
                                  className="impact-badge flex items-center gap-2"
                                  whileHover={{ x: 5 }}
                                >
                                  <motion.div
                                    className="w-2 h-2 bg-green-500 rounded-full"
                                    animate={{ 
                                      scale: [1, 1.2, 1],
                                      opacity: [1, 0.6, 1]
                                    }}
                                    transition={{ 
                                      duration: 1.5, 
                                      repeat: Infinity 
                                    }}
                                  />
                                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                                    Impact: {project.impact}
                                  </span>
                                </motion.div>
                                
                                {/* Hover Effect Overlay */}
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover/project:opacity-5 rounded-2xl pointer-events-none`}
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Enhanced Timeline Dot */}
                      <motion.div
                        className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.3,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <div className={`timeline-dot relative w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full shadow-2xl flex items-center justify-center border-4 border-white dark:border-dark-800 glow-border`}>
                          <motion.div
                            className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full`} />
                          </motion.div>
                          
                          {/* Pulsing Rings */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute inset-0 rounded-full border-2 ${exp.color.includes('blue') ? 'border-blue-400' : 'border-green-400'} opacity-30`}
                              animate={{ 
                                scale: [1, 1.5, 2],
                                opacity: [0.3, 0.1, 0]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: i * 0.4
                              }}
                            />
                          ))}
                          
                          {/* Year Badge */}
                          <motion.div
                            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white dark:bg-dark-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3 + 0.5 }}
                          >
                            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                              {exp.period.split('–')[0].trim()}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="mt-20">
            <motion.h3
              className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Key Achievements
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-dark-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className={`inline-flex p-4 rounded-full ${achievement.color} bg-opacity-20 mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className={achievement.color}>
                      {achievement.icon}
                    </div>
                  </motion.div>
                  
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;