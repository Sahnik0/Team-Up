import { Link } from 'react-router-dom';
import { Users, UserCircle, LogIn, LogOut, MessageCircle, Sparkles, Menu, X, Moon, Sun } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { Button } from './ui/Button';
import RequestNotifications from './RequestNotifications';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-lg transition-colors duration-200"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Users className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors" />
            </motion.div>
            <span className="text-base sm:text-lg md:text-2xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors">
              TeamUp
            </span>
          </Link>

          {/* Dark Mode Toggle + Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-200"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600" />
              )}
            </Button>
            
            <div className="sm:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Menu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                )}
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {user ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="flex items-center space-x-1 sm:space-x-2 md:space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/teams">
                    <Button variant="ghost" className="group px-2 sm:px-3 md:px-4 h-9 sm:h-10 text-gray-700 dark:text-gray-200">
                      <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                      <span className="hidden md:inline ml-2">Find Teams</span>
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/team-chat">
                    <Button variant="ghost" className="group px-2 sm:px-3 md:px-4 h-9 sm:h-10 text-gray-700 dark:text-gray-200">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" />
                      <span className="hidden md:inline ml-2">Chats</span>
                    </Button>
                  </Link>
                </motion.div>

                <div className="hidden sm:block">
                  <RequestNotifications />
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/profile">
                    <Button variant="ghost" className="group px-2 sm:px-3 md:px-4 h-9 sm:h-10 text-gray-700 dark:text-gray-200">
                      <UserCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
                      <span className="hidden md:inline ml-2">Profile</span>
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    onClick={() => auth.signOut()}
                    className="group px-2 sm:px-3 md:px-4 h-9 sm:h-10 text-gray-700 dark:text-gray-200 dark:border-gray-600"
                  >
                    <LogOut className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-45 transition-transform" />
                    <span className="hidden md:inline ml-2">Sign Out</span>
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors px-2 sm:px-3 md:px-4 h-9 sm:h-10">
                    <LogIn className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden md:inline ml-2">Sign In</span>
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {user ? (
                  <>
                    <Link to="/teams">
                      <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-200">
                        <Sparkles className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                        <span className="ml-2">Find Teams</span>
                      </Button>
                    </Link>
                    <Link to="/team-chat">
                      <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-200">
                        <MessageCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
                        <span className="ml-2">Chats</span>
                      </Button>
                    </Link>
                    <RequestNotifications />
                    <Link to="/profile">
                      <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-200">
                        <UserCircle className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="ml-2">Profile</span>
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => auth.signOut()}
                      className="w-full justify-start text-gray-700 dark:text-gray-200 dark:border-gray-600"
                    >
                      <LogOut className="h-5 w-5" />
                      <span className="ml-2">Sign Out</span>
                    </Button>
                  </>
                ) : (
                  <Link to="/login">
                    <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                      <LogIn className="h-5 w-5" />
                      <span className="ml-2">Sign In</span>
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}