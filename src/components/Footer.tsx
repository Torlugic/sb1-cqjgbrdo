import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-orbitron font-bold gradient-text mb-4">Pixxal Media</h3>
            <p className="text-cyan-500/80 mb-4">
              Here to help your business find time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron font-bold text-white mb-4">SOLUTIONS</h4>
            <ul className="space-y-2">
              <li><Link to="/ai" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">AI Automation</Link></li>
              <li><Link to="/ecommerce" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">eCommerce</Link></li>
              <li><a href="#" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">CRM Integration</a></li>
              <li><a href="#" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">Workflow Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron font-bold text-white mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><a href="#" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron font-bold text-white mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-cyan-500/80 hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
          <p className="text-cyan-500/60 text-sm">
            © {new Date().getFullYear()} Pixxal.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;