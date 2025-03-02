import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Workflow, Code, Zap, ChevronRight, Bot, BrainCircuit as Circuit } from 'lucide-react';

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

function App() {

  const [randomRotation, setRandomRotation] = useState(0);

  useEffect(() => {
    // Generate a random rotation between -3 and 3 degrees
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
        <div className="absolute w-[700px] h-[600px] bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <nav className="absolute top-0 left-0 right-0 py-6">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg sm:text-2xl md:text-2xl font-orbitron font-bold gradient-text mb-8"
              >
                PIXXAL.AI
              </motion.div>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0, x: 1000 }}
                className="neon-button text-sm hidden md:block"
              >
                INITIALIZE CONTACT
              </motion.button>
            </div>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-32"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-orbitron font-black mb-6 tracking-wider">
              <motion.span 
                className="gradient-text cyber-text-glow block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AUTOMATE
              </motion.span>
              <span className="text-white">INTEGRATE & SCALE</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-500/80 mb-8 font-light tracking-wide">
              AI-driven workflows built for speed, precision, and growth.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="neon-button text-lg animate-[wiggle_1s_ease-in-out_infinite]"
            >
              INITIALIZE SYSTEM
              <ChevronRight className="inline ml-2" />
            </motion.button>
          </motion.div>
        </div>
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

export default App;