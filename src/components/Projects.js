import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EyeIcon, 
  CodeBracketIcon, 
  XMarkIcon,
  SparklesIcon,
  CpuChipIcon,
  CloudIcon,
  ShoppingBagIcon,
  HomeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI Agents', 'LLM Development', 'Multi-Modal AI', 'MLOps'];

  const projects = [
    {
      id: 1,
      title: 'AI Interview Agent',
      subtitle: 'Intelligent Interview Assistant',
      description: 'Built an AI-powered interview assistant that conducts mock interviews with real-time evaluation and structured feedback.',
      longDescription: 'Developed a comprehensive AI interview system using advanced agentic workflows. The system orchestrates multiple AI modules including Question Generator, Response Analyzer, and Scoring Agent to provide realistic interview experiences. Features adaptive multi-turn dialogues with dynamic question flow based on candidate responses.',
      category: 'AI Agents',
      technologies: ['LangGraph', 'LangChain', 'Python', 'RAG', 'RLHF', 'FastAPI'],
      features: [
        'Real-time interview evaluation',
        'Agentic workflow orchestration',
        'Dynamic question generation',
        'Structured feedback system',
        'Analytics dashboard'
      ],
      impact: '60% reduction in HR workload',
      metrics: {
        'Accuracy': '92%',
        'Processing Speed': '2x faster',
        'User Satisfaction': '95%'
      },
      image: '/projects/ai-interview.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/EMTIAZ-RUET',
      icon: <UserGroupIcon className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-600',
      status: 'Production'
    },
    {
      id: 2,
      title: 'E-commerce AI Agent',
      subtitle: 'Intelligent Shopping Assistant',
      description: 'Developed an AI-powered interactive shopping assistant for product queries, recommendations, and guided sales.',
      longDescription: 'Created a sophisticated e-commerce agent that provides personalized shopping experiences through intelligent product recommendations and natural language interactions. The system uses retrieval-augmented generation to access product catalogs and deliver contextual responses.',
      category: 'AI Agents',
      technologies: ['LangGraph', 'LangChain', 'Vector DB', 'NLP', 'Recommendation Systems'],
      features: [
        'Personalized product recommendations',
        'Natural language product search',
        'Real-time inventory integration',
        'Guided sales conversations',
        'Multi-language support'
      ],
      impact: 'Improved conversion efficiency by 35%',
      metrics: {
        'Conversion Rate': '+35%',
        'Response Time': '<200ms',
        'Accuracy': '89%'
      },
      image: '/projects/ecommerce-agent.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/EMTIAZ-RUET',
      icon: <ShoppingBagIcon className="w-8 h-8" />,
      color: 'from-green-500 to-blue-600',
      status: 'Production'
    },
    {
      id: 3,
      title: 'Property Tech Agent',
      subtitle: 'Smart Property Search System',
      description: 'Built a domain-specific property search agent with contextual filters and intelligent matching algorithms.',
      longDescription: 'Developed an advanced property search system that understands user preferences through natural language and provides accurate property matches. Features contextual filtering based on location, budget, type, and user history with interactive multi-turn search refinement.',
      category: 'AI Agents',
      technologies: ['LangGraph', 'LangChain', 'Geospatial AI', 'Context Processing', 'Search Algorithms'],
      features: [
        'Contextual property filtering',
        'Location-based search',
        'Budget optimization',
        'Multi-turn conversation',
        'Property matching algorithms'
      ],
      impact: 'Enhanced user experience with 40% faster property discovery',
      metrics: {
        'Search Accuracy': '91%',
        'User Engagement': '+40%',
        'Time to Find': '60% faster'
      },
      image: '/projects/property-agent.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/EMTIAZ-RUET',
      icon: <HomeIcon className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      status: 'Production'
    },
    {
      id: 4,
      title: 'LLM Optimization Pipeline',
      subtitle: 'High-Performance Language Models',
      description: 'Built and fine-tuned LLMs with 2x inference speed improvement through advanced optimization techniques.',
      longDescription: 'Developed a comprehensive LLM optimization pipeline featuring model quantization, ONNX Runtime deployment, and TensorRT optimization. Applied RLHF for human preference alignment and implemented distributed training strategies for large-scale model development.',
      category: 'LLM Development',
      technologies: ['PyTorch', 'TensorFlow', 'ONNX', 'TensorRT', 'CUDA', 'Distributed Training'],
      features: [
        'Model quantization',
        'RLHF implementation',
        'Distributed training',
        'Mixed-precision optimization',
        'Inference acceleration'
      ],
      impact: '2x inference speed improvement',
      metrics: {
        'Speed Improvement': '2x',
        'Model Size Reduction': '70%',
        'Accuracy Retention': '98%'
      },
      image: '/projects/llm-optimization.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/EMTIAZ-RUET',
      icon: <CpuChipIcon className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600',
      status: 'Production'
    },
    {
      id: 5,
      title: 'Multi-Modal AI System',
      subtitle: 'Vision + Text + Speech Integration',
      description: 'Developed integrated multi-modal AI system combining computer vision, NLP, and speech processing.',
      longDescription: 'Created a comprehensive multi-modal AI platform that processes and understands information across vision, text, and speech modalities. Features cross-modal embedding systems for matching images with text captions and audio with transcripts, enabling rich AI applications.',
      category: 'Multi-Modal AI',
      technologies: ['CNNs', 'RNNs', 'Transformers', 'Speech Recognition', 'Computer Vision', 'Cross-Modal Embeddings'],
      features: [
        'Multi-modal understanding',
        'Cross-modal embeddings',
        'Speech-to-text processing',
        'Image captioning',
        'Unified representation learning'
      ],
      impact: 'Enabled rich multi-modal applications',
      metrics: {
        'Modal Accuracy': '87%',
        'Cross-Modal Alignment': '92%',
        'Processing Speed': '150ms'
      },
      image: '/projects/multimodal-ai.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/EMTIAZ-RUET',
      icon: <SparklesIcon className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      status: 'Development'
    },
    {
      id: 6,
      title: 'Scalable MLOps Platform',
      subtitle: 'Cloud-Native ML Infrastructure',
      description: 'Deployed ML systems at scale on AWS with automated retraining workflows and monitoring.',
      longDescription: 'Built a comprehensive MLOps platform featuring automated model deployment, monitoring, and retraining workflows. Implemented microservices architecture with Kubernetes orchestration, reducing system downtime by 40% and enabling seamless ML model lifecycle management.',
      category: 'MLOps',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Airflow', 'Prometheus', 'Grafana', 'Microservices'],
      features: [
        'Automated ML pipelines',
        'Model monitoring',
        'Microservices architecture',
        'Auto-scaling infrastructure',
        'Performance analytics'
      ],
      impact: '40% reduction in system downtime',
      metrics: {
        'Uptime': '99.9%',
        'Deployment Speed': '5x faster',
        'Cost Reduction': '30%'
      },
      image: '/projects/mlops-platform.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/EMTIAZ-RUET',
      icon: <CloudIcon className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      status: 'Production'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Header */}
          <div className={`bg-gradient-to-r ${project.color} p-8 text-white relative overflow-hidden`}>
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XMarkIcon className="w-6 h-6" />
            </motion.button>

            <div className="flex items-center gap-6">
              <motion.div
                className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {project.icon}
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-white/90 text-lg">{project.subtitle}</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Production' 
                      ? 'bg-green-500/20 text-green-100' 
                      : 'bg-yellow-500/20 text-yellow-100'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-white/80 text-sm">{project.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Overview</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            {/* Features & Impact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Performance Metrics</h4>
                <div className="space-y-4">
                  {Object.entries(project.metrics).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="flex justify-between items-center p-3 bg-gray-50 dark:bg-dark-700 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">{key}</span>
                      <span className="font-bold text-primary-600 dark:text-primary-400">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Impact & Results</h4>
              <p className="text-lg font-medium text-green-700 dark:text-green-300">
                {project.impact}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.a
                href={project.demoUrl}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <EyeIcon className="w-5 h-5" />
                View Demo
              </motion.a>
              
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CodeBracketIcon className="w-5 h-5" />
                View Code
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-primary-300/10 to-purple-300/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-300/10 to-green-300/10 rounded-full"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 dark:bg-dark-800 rounded-full shadow-lg mb-6"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <CodeBracketIcon className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">My Projects</span>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent">
                AI Solutions Portfolio
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Showcasing cutting-edge AI projects that push the boundaries of machine learning 
              and deliver real-world impact across various domains.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative"
                  layoutId={`project-${project.id}`}
                >
                  <motion.div
                    className="group bg-white dark:bg-dark-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image/Header */}
                    <div className={`relative h-52 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center overflow-hidden`}>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-grid-pattern" />
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 group-hover:from-black/10 group-hover:to-black/30 transition-all duration-300"
                      />
                      
                      <motion.div
                        className="relative z-10 text-white flex flex-col items-center text-center"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-4 group-hover:bg-white/30 transition-colors duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          {project.icon}
                        </motion.div>
                        <h3 className="text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.title}
                        </h3>
                      </motion.div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Production' 
                            ? 'bg-green-500/20 text-green-100' 
                            : 'bg-yellow-500/20 text-yellow-100'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      >
                        <motion.div
                          className="text-white text-center"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                        >
                          <EyeIcon className="w-8 h-8 mx-auto mb-2" />
                          <p className="font-semibold">View Details</p>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                          {project.subtitle}
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="inline-flex items-center px-3 py-1.5 bg-gray-50 dark:bg-dark-600 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 3 && (
                          <motion.span 
                            className="px-3 py-1.5 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 text-primary-600 dark:text-primary-400 text-xs rounded-lg font-medium border border-primary-200 dark:border-primary-700"
                            whileHover={{ scale: 1.05 }}
                          >
                            +{project.technologies.length - 3} more
                          </motion.span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">
                            {project.impact.split(' ').slice(0, 3).join(' ')}...
                          </span>
                        </div>
                        
                        <div className="flex gap-2">
                          <motion.button
                            className="flex items-center gap-1 px-3 py-2 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors text-xs font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <EyeIcon className="w-4 h-4" />
                            Details
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;