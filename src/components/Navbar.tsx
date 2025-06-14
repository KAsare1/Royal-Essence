import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-semibold text-gray-900 hover:text-primary transition-colors">
            Royal Essence
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-700'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/properties" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-700'}`
              }
            >
              Properties
            </NavLink>
            <NavLink 
              to="/reviews" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-700'}`
              }
            >
              Reviews
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-700'}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl border-t border-gray-100/50">
              <NavLink 
                to="/" 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `block px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 rounded-lg ${isActive ? 'text-primary bg-gray-50' : 'text-gray-700'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `block px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 rounded-lg ${isActive ? 'text-primary bg-gray-50' : 'text-gray-700'}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/properties" 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `block px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 rounded-lg ${isActive ? 'text-primary bg-gray-50' : 'text-gray-700'}`
                }
              >
                Properties
              </NavLink>
              <NavLink 
                to="/reviews" 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `block px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 rounded-lg ${isActive ? 'text-primary bg-gray-50' : 'text-gray-700'}`
                }
              >
                Reviews
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `block px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 rounded-lg ${isActive ? 'text-primary bg-gray-50' : 'text-gray-700'}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
