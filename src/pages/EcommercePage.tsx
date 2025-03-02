import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap, BarChart3, ChevronRight, Repeat, Bot, Users, ShoppingBag } from 'lucide-react';

const ecommerceFeatures = [
  {
    icon: ShoppingCart,
    title: 'Smart Product Recommendations',
    description: 'AI-powered product suggestions based on browsing history and purchase patterns'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast sales trends and inventory needs with machine learning algorithms'
  },
  {
    icon: Users,
    title: 'Customer Segmentation',
    description: 'Automatically group customers based on behavior for targeted marketing'
  },
  {
    icon: ShoppingBag,
    title: 'Inventory Optimization',
    description: 'Smart stock management that predicts demand and prevents stockouts'
  }
];

function EcommercePage() {
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
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

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
                <span className="gradient-text block mt-2">eCOMMERCE</span>
              </h1>
              <p className="text-xl text-cyan-500/80 mb-8 leading-relaxed">
                Transform your online store with intelligent automation, personalized customer experiences, 
                and data-driven insights that drive conversions and growth.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="neon-button text-lg"
              >
                BOOST YOUR SALES
                <ChevronRight className="inline ml-2" />
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="AI eCommerce visualization" 
                  className="w-full rounded-sm border border-cyan-500/30"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-transparent"></div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 bg-black/80 border border-cyan-500/30 p-3 backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-xs text-cyan-400">CONVERSION RATE</div>
                  <div className="text-lg font-orbitron text-white">+42%</div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 bg-black/80 border border-cyan-500/30 p-3 backdrop-blur-sm"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-xs text-cyan-400">AOV</div>
                  <div className="text-lg font-orbitron text-white">+38%</div>
                </motion.div>
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
            AI COMMERCE FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceFeatures.map((feature, index) => (
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

      {/* Benefits Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-orbitron font-bold mb-8 gradient-text tracking-wider">
                TRANSFORM YOUR ONLINE STORE
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Bot className="w-8 h-8 text-cyan-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-orbitron font-bold mb-2">AI-Powered Customer Service</h3>
                    <p className="text-cyan-500/80">
                      Intelligent chatbots that understand customer queries and provide 
                      personalized assistance 24/7, increasing satisfaction and sales.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Repeat className="w-8 h-8 text-cyan-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-orbitron font-bold mb-2">Automated Retargeting</h3>
                    <p className="text-cyan-500/80">
                      Smart algorithms identify abandoned carts and browsing patterns to deliver 
                      personalized retargeting campaigns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Zap className="w-8 h-8 text-cyan-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-orbitron font-bold mb-2">Performance Optimization</h3>
                    <p className="text-cyan-500/80">
                      Continuous analysis of your store's performance with AI-driven recommendations 
                      for improving conversion rates and customer experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="eCommerce dashboard on tablet" 
                  className="w-full rounded-sm border border-cyan-500/30"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent"></div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-black/80 border border-cyan-500/30 p-3 backdrop-blur-sm">
                      <div className="text-xs text-cyan-400">REVENUE</div>
                      <div className="text-lg font-orbitron text-white">+127%</div>
                    </div>
                    <div className="bg-black/80 border border-cyan-500/30 p-3 backdrop-blur-sm">
                      <div className="text-xs text-cyan-400">CUSTOMERS</div>
                      <div className="text-lg font-orbitron text-white">+85%</div>
                    </div>
                    <div className="bg-black/80 border border-cyan-500/30 p-3 backdrop-blur-sm">
                      <div className="text-xs text-cyan-400">RETENTION</div>
                      <div className="text-lg font-orbitron text-white">+63%</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              UPGRADE YOUR STORE TODAY
            </h2>
            <p className="text-xl text-cyan-500/80 mb-8 max-w-2xl mx-auto">
              Join the future of eCommerce with our AI-powered solutions.
              Schedule a demo to see how we can transform your online business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="neon-button text-lg"
            >
              GET STARTED
              <ChevronRight className="inline ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default EcommercePage;