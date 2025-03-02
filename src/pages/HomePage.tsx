import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Workflow, Code, ChevronRight, Bot, BrainCircuit as Circuit, Play } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI-Powered Workflows',
    description: 'Intelligent automation that learns and adapts to your business needs'
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: 'Streamline operations with smart process automation'
  },
  {
    icon: Code,
    title: 'No-Code AI Solutions',
    description: 'Powerful AI tools without the complexity'
  },
  {
    icon: Circuit,
    title: 'API Integrations',
    description: 'Seamless connection with your existing tech stack'
  }
];

function HomePage() {
  const [randomRotation, setRandomRotation] = useState(0);

  useEffect(() => {
    setRandomRotation(Math.random() * 6 - 3);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
        {/* Tech pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_20%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))]"></div>
        
        {/* Animated orbs */}
        <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Particle effect overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_50%)] animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-orbitron font-black mb-6 tracking-wider leading-tight">
                <motion.span 
                  className="cyber-text block"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  AUTOMATE.
                </motion.span>
                <motion.span 
                  className="cyber-text block"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                >
                  INTEGRATE.
                </motion.span>
                <motion.span 
                  className="cyber-text block"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                >
                  SCALE.
                </motion.span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-500/80 mb-12 font-light tracking-wide max-w-3xl mx-auto">
                AI-driven customer support, CRM integrations, and workflow automation built for efficiency, growth and reduced cost.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="neon-button text-lg group"
                >
                  GET STARTED
                  <ChevronRight className="inline ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-lg font-orbitron text-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  SEE HOW IT WORKS
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic AI shape */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              fill="rgba(0, 195, 255, 0.1)"
              d="M40,-62.7C52.9,-56.8,64.8,-47.2,72.3,-34.4C79.8,-21.6,82.9,-5.7,79.8,8.9C76.7,23.5,67.4,36.8,56.1,47.4C44.8,58,31.5,65.9,17.1,69.9C2.7,73.9,-12.8,74,-27.2,69.7C-41.6,65.4,-54.9,56.7,-65.4,44.7C-75.9,32.7,-83.5,17.3,-84.2,1.5C-84.9,-14.3,-78.6,-30,-68.4,-42.5C-58.2,-55,-44,-64.3,-29.8,-69.1C-15.6,-73.9,-1.4,-74.2,12.8,-71.8C27,-69.4,41.2,-64.3,40,-62.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>
        
        {/* Additional geometric shapes for visual interest */}
        <motion.div 
          className="absolute top-1/4 right-[10%] w-16 h-16 border border-cyan-500/20"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-[10%] w-8 h-8 border border-purple-500/20"
          animate={{ 
            rotate: [0, -90, -180, -270, -360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
      </section>

      {/* About Section */}
      <section className="py-20 cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Bot className="w-16 h-16 mx-auto mb-8 text-cyan-500" />
            <h2 className="text-4xl font-orbitron font-bold mb-6 gradient-text tracking-wider">
              AI SOLUTIONS
            </h2>
            <p className="text-xl text-cyan-500/80 leading-relaxed">
              At Pixxal.ai, we help you reclaim your time by eliminating repetitive tasks with advanced AI automation.</p>  
            <p className="text-xl text-cyan-500/80 leading-relaxed">
               Our cutting-edge technology streamlines customer interactions, optimizes CRM management, and seamlessly 
               integrates AI-driven workflows—freeing you to focus on what truly matters: growing your business. Whether 
               you're looking to enhance efficiency, scale operations, or reduce manual effort, Pixxal.ai delivers smart
               automation solutions tailored to your needs. Let AI handle the busywork while you drive innovation and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 gradient-text tracking-wider">
            SYSTEM MODULES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ "--start-rotation": `${randomRotation}deg` } as React.CSSProperties}
                className="cyber-card p-6 animate-wiggle3"
              >
                <service.icon className="w-12 h-12 text-purple-500 mb-4 animate-wiggle2" />
                <h3 className="text-xl font-orbitron font-bold mb-3">{service.title}</h3>
                <p className="text-cyan-500/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-orbitron font-black mb-8 gradient-text tracking-wider">
              INITIATE COLLABORATION
            </h2>
            <p className="text-xl text-cyan-500/80 mb-8 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions.
              Schedule a demo today and discover the future of automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="neon-button text-lg"
            >
              REQUEST ACCESS
              <ChevronRight className="inline ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;