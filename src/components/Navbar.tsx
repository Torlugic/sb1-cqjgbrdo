import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 py-6 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-2xl md:text-2xl font-orbitron font-bold gradient-text"
          >
            <Link to="/">Pixxal Media</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="neon-button text-sm"
            >
              CONTACT
            </motion.button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-cyan-400" />
              ) : (
                <Menu className="h-6 w-6 text-cyan-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-t border-cyan-500/20 mt-6"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLinks closeMenu={() => setIsOpen(false)} />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="neon-button text-sm self-start"
              >
                CONTACT
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-orbitron">HOME</Link>
      <Link to="/ecommerce" className="text-white hover:text-cyan-400 transition-colors font-orbitron">eCOMMERCE</Link>
      <Link to="/ai" className="text-white hover:text-cyan-400 transition-colors font-orbitron">AI</Link>
      <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-orbitron">ABOUT</Link>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <Link to="/" onClick={closeMenu} className="text-white hover:text-cyan-400 transition-colors font-orbitron py-2">HOME</Link>
      <Link to="/ecommerce" onClick={closeMenu} className="text-white hover:text-cyan-400 transition-colors font-orbitron py-2">eCOMMERCE</Link>
      <Link to="/ai" onClick={closeMenu} className="text-white hover:text-cyan-400 transition-colors font-orbitron py-2">AI</Link>
      <Link to="/about" onClick={closeMenu} className="text-white hover:text-cyan-400 transition-colors font-orbitron py-2">ABOUT</Link>
    </>
  );
};

export default Navbar;