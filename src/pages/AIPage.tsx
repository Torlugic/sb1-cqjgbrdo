import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Workflow, Code, ChevronRight, Bot, BrainCircuit as Circuit, Cpu, Zap, Server } from 'lucide-react';

const aiFeatures = [
  {
    icon: Brain,
    title: 'Natural Language Processing',
    description: 'Advanced NLP capabilities for understanding customer queries and providing intelligent responses'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Self-improving algorithms that get smarter with every interaction'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Instant analysis and response to customer inquiries without delay'
  },
  {
    icon: Server,
    title: 'Scalable Architecture',
    description: 'Handle thousands of simultaneous interactions without performance degradation'
  }
];

function AIPage() {
  const [randomRotation, setRandomRotation] = useState(0);

  useEffect(() => {
    setRandomRotation(Math.random() * 6 - 3);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white font-sans pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden cyber-grid">
        {/* Tech pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_20%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))]"></div>
        
        {/* Animated orbs */}
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-black mb-6 tracking-wider">
                <span className="cyber-text">AI-POWERED</span>
                <span className="gradient-text block mt-2">AUTOMATION</span>
              </h1>
              <p className="text-xl text-cyan-500/80 mb-8 leading-relaxed">
                Our advanced AI solutions transform how businesses operate by automating complex workflows, 
                understanding customer needs, and delivering personalized experiences at scale.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="neon-button text-lg"
              >
                EXPLORE AI SOLUTIONS
                <ChevronRight className="inline ml-2" />
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* AI visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border border-cyan-500/30 rounded-full"></div>
                <div className="absolute inset-8 border border-purple-500/30 rounded-full"></div>
                
                {/* Central brain icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-24 h-24 text-cyan-400" />
                </div>
                
                {/* Orbiting elements */}
                {[0, 60, 120, 180, 240, 300].map((degree, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center"
                    style={{
                      top: `calc(50% - 1rem + ${Math.sin(degree * Math.PI / 180) * 120}px)`,
                      left: `calc(50% - 1rem + ${Math.cos(degree * Math.PI / 180) * 120}px)`,
                    }}
                    animate={{
                      top: [
                        `calc(50% - 1rem + ${Math.sin(degree * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.sin((degree + 60) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.sin((degree + 120) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.sin((degree + 180) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.sin((degree + 240) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.sin((degree + 300) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.sin((degree + 360) * Math.PI / 180) * 120}px)`,
                      ],
                      left: [
                        `calc(50% - 1rem + ${Math.cos(degree * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.cos((degree + 60) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.cos((degree + 120) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.cos((degree + 180) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.cos((degree + 240) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.cos((degree + 300) * Math.PI / 180) * 120}px)`,
                        `calc(50% - 1rem + ${Math.cos((degree + 360) * Math.PI / 180) * 120}px)`,
                      ],
                    }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                      delay: i * -3.33,
                    }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 gradient-text tracking-wider">
            AI CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ "--start-rotation": `${randomRotation}deg` } as React.CSSProperties}
                className="cyber-card p-6 animate-wiggle3"
              >
                <feature.icon className="w-12 h-12 text-purple-500 mb-4 animate-wiggle2" />
                <h3 className="text-xl font-orbitron font-bold mb-3">{feature.title}</h3>
                <p className="text-cyan-500/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 gradient-text tracking-wider">
            HOW IT WORKS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="cyber-card p-6 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-black border border-cyan-500 flex items-center justify-center">
                  <span className="font-orbitron text-2xl text-cyan-500">01</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 mt-4">Data Collection</h3>
                <p className="text-cyan-500/80">
                  Our AI system collects and analyzes data from your existing workflows, customer interactions, and business processes.
                </p>
              </div>
              <motion.div 
                className="absolute -z-10 inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="cyber-card p-6 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-black border border-cyan-500 flex items-center justify-center">
                  <span className="font-orbitron text-2xl text-cyan-500">02</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 mt-4">AI Processing</h3>
                <p className="text-cyan-500/80">
                  Advanced machine learning algorithms identify patterns, inefficiencies, and opportunities for automation.
                </p>
              </div>
              <motion.div 
                className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="cyber-card p-6 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-black border border-cyan-500 flex items-center justify-center">
                  <span className="font-orbitron text-2xl text-cyan-500">03</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 mt-4">Automated Execution</h3>
                <p className="text-cyan-500/80">
                  The system implements intelligent workflows that continuously improve based on new data and feedback.
                </p>
              </div>
              <motion.div 
                className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, delay: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-orbitron font-bold text-center mb-16 gradient-text tracking-wider">
              SUCCESS METRICS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-5xl font-orbitron font-bold gradient-text mb-2">85%</h3>
                <p className="text-cyan-500/80">Reduction in manual tasks</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-5xl font-orbitron font-bold gradient-text mb-2">3.5x</h3>
                <p className="text-cyan-500/80">Increase in customer response speed</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-5xl font-orbitron font-bold gradient-text mb-2">42%</h3>
                <p className="text-cyan-500/80">Cost reduction in operations</p>
              </div>
            </div>
            
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="neon-button text-lg"
              >
                VIEW CASE STUDIES
                <ChevronRight className="inline ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AIPage;