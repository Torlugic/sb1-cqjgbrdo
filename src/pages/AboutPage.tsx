import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Lightbulb, ChevronRight, Globe, Clock, Cpu } from 'lucide-react';

const teamMembers = [
  {
    name: 'Nicholas N',
    role: 'CEO & Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQFR2Q6kReK5lg/profile-displayphoto-shrink_400_400/B4EZTIjWxgHgAk-/0/1738531499562?e=1746057600&v=beta&t=6tvt1lmXTK1AsCyQDZXUQrk5UsGXJvt_VQgYjhGZEYc.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'A problem-solving creative with a strong foundation in game development, copywriting, and AI automation, skilled in crafting interactive experiences, persuasive narratives, and efficient digital solutions.'
  },
  {
    name: 'Samuel N',
    role: 'CTO & Co-Founder',
    image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/313918055_154873827243957_4926271063643763164_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KjA1EBWFORAQ7kNvgFijA1z&_nc_oc=AdiklWvtmqvf2Z63KsS3peoU3AHHul7OD1e9GBIGKqbCM_cFOc8cbn6mej2BbE8fWHM&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=Am17TD3E6tbj_WfH-8ZxZi0&oh=00_AYDCFiNjOH-VkjVz-t6-muCU_Z6ff7pc-YCg6k-1wXflkg&oe=67C839C5.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'A strategic and analytical expert skilled in market dynamics, consumer psychology, and revenue optimization, with a deep understanding of scaling and streamlining digital operations.'
  }/*,
  {
    name: 'Jayda N',
    role: 'Head of Design',
    image: 'https://imgur.com/BVqLz29?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'A creative professional with expertise in design, content creation, and copywriting, skilled in blending visual aesthetics with compelling storytelling to engage and inspire audiences.'
  },
  {
    name: 'Place Holder',
    role: 'Place Holder',
    image: 'https://imgur.com/a/o1iGytY?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Place Holder'
  }*/
];

const milestones = [
  {
    /*year: '2020',
    title: 'Company Founded',
    description: 'Pixxal.AI was established with a mission to democratize AI automation for businesses of all sizes.'
  },
  {
    year: '2021',
    title: 'First Major Client',
    description: 'Secured partnership with Fortune 500 company to implement AI-driven customer service solutions.'
  },
  {
    year: '2022',
    title: 'Product Expansion',
    description: 'Launched eCommerce automation suite and expanded team to 25 AI specialists and engineers.'
  },
  {
    year: '2023',
    title: 'Series A Funding',
    description: 'Raised $12M in Series A funding to accelerate product development and market expansion.'
  },
  {*/
    year: '2025',
    title: 'Getting Started',
    description: 'Now taking on clients'
  }
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden cyber-grid">
        {/* Tech pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_20%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))]"></div>
        
        {/* Animated orbs */}
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-black mb-6 tracking-wider">
              <span className="gradient-text">OUR MISSION</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-500/80 mb-12 leading-relaxed">
              Empowering businesses by freeing up their valuable time through intelligent automation of repetitive tasks. We craft innovative ad strategies 
              that captivate and engage customers, driving meaningful connections and sustainable growth. By blending cutting-edge technology with creative 
              expertise, we enable our clients to focus on what truly matters—building their vision and achieving their goals. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="cyber-card p-6 text-center"
              >
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-bold mb-3">PEOPLE-FIRST</h3>
                <p className="text-cyan-500/80">
                  By integrating AI, we help people work smarter, focus on what matters, and achieve their goals faster.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="cyber-card p-6 text-center"
              >
                <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-bold mb-3">EXCELLENCE</h3>
                <p className="text-cyan-500/80">
                  We’re dedicated to providing top-tier AI-powered automated workflows that streamline your work and drive results..
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="cyber-card p-6 text-center"
              >
                <Lightbulb className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-bold mb-3">INNOVATION</h3>
                <p className="text-cyan-500/80">
                  We harness the power of AI to push boundaries, innovate relentlessly, and deliver transformative solutions..
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 gradient-text tracking-wider">
            OUR TEAM
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card p-6"
              >
                <div className="relative w-full aspect-square mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-orbitron font-bold">{member.name}</h3>
                    <p className="text-cyan-400">{member.role}</p>
                  </div>
                </div>
                <p className="text-cyan-500/80">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 gradient-text tracking-wider">
            OUR JOURNEY
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-cyan-500/30 transform md:translate-x-[-0.5px]"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-0 md:right-0 md:translate-x-1/2' : 'left-0 md:left-0 md:translate-x-[-50%]'
                } w-6 h-6 rounded-full border-2 border-cyan-500 bg-black`}></div>
                
                {/* Content */}
                <div className="pl-10 md:pl-0">
                  <div className="cyber-card p-6">
                    <div className="text-3xl font-orbitron font-bold gradient-text mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-orbitron font-bold mb-3">{milestone.title}</h3>
                    <p className="text-cyan-500/80">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cyber-card p-6 text-center"
            >
              <Globe className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-orbitron font-bold gradient-text mb-2">15+</div>
              <p className="text-cyan-500/80">Countries Served</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="cyber-card p-6 text-center"
            >
              <Cpu className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-orbitron font-bold gradient-text mb-2">500+</div>
              <p className="text-cyan-500/80">AI Solutions Deployed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="cyber-card p-6 text-center"
            >
              <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-orbitron font-bold gradient-text mb-2">1M+</div>
              <p className="text-cyan-500/80">Hours Saved for Clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-orbitron font-black mb-8 gradient-text tracking-wider">
              JOIN OUR MISSION
            </h2>
            <p className="text-xl text-cyan-500/80 mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us, join our team, or learn more about our technology,
              we'd love to connect with you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="neon-button text-lg"
            >
              CONTACT US
              <ChevronRight className="inline ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;