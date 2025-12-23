import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo-beangate.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className='flex'>
                        <div>
                            <img src={logo} alt="" width={50}/>
                        </div>
                         <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <span className="text-2xl font-bold text-primary">BeanGate</span>
                    </div>
                    </div>
                   

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Overview</a>
                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium">
                                Courses <ChevronDown className="ml-1 w-4 h-4" />
                            </button>
                        </div>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Mentors</a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Testimonials</a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg hover:shadow-primary/30">
                            Start Learning
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Home</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"></a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Courses</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Mentors</a>
                            <a href="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Testimonials</a>
                            <div className="pt-4">
                                <button className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg">
                                    Start Learning
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
