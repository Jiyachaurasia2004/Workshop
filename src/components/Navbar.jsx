import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute w-full top-0 z-50">
            {/* Top Bar */}
            <div className="bg-transparent py-3 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-gray-700 text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>+1 (454) 556-5656</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>Yourmail@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:text-green-500 transition-colors"><Facebook className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-green-500 transition-colors"><span className="font-serif italic font-bold text-lg">P</span></a> {/* Pinterest placeholder */}
                        <a href="#" className="hover:text-green-500 transition-colors"><Linkedin className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-green-500 transition-colors"><Twitter className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="bg-[#0F52BA] rounded-md md:rounded-lg px-6 py-4 flex justify-between items-center shadow-lg relative">

                    {/* Logo */}
                    <div className="flex items-center space-x-2 text-white">
                        <div className="w-8 h-8 relative">
                            {/* Simple leaf icon representation using lucide or svg if needed. Using Leaf for now */}
                            <Leaf className="w-8 h-8 fill-current" />
                        </div>
                        <span className="text-2xl font-bold">Beangate</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-white">
                        <a href="#" className="font-medium hover:text-blue-200 transition-colors">Home</a>
                        <a href="#" className="font-medium hover:text-blue-200 transition-colors">About</a>
                        <div className="relative group cursor-pointer flex items-center">
                            <span className="font-medium hover:text-blue-200 transition-colors">Blog</span>
                            <ChevronDown className="ml-1 w-4 h-4" />
                        </div>
                        <div className="relative group cursor-pointer flex items-center">
                            <span className="font-medium hover:text-blue-200 transition-colors">Pages</span>
                            <ChevronDown className="ml-1 w-4 h-4" />
                        </div>
                        <a href="#" className="font-medium hover:text-blue-200 transition-colors">Contact</a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-white text-[#0F52BA] px-6 py-2.5 rounded shadow-sm hover:bg-gray-50 transition-colors font-semibold text-sm">
                            Make a Donate
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden absolute left-4 right-4 top-full mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                        >
                            <div className="px-5 py-6 space-y-4">
                                <a href="#" className="block text-gray-700 font-medium hover:text-[#0F52BA]">Home</a>
                                <a href="#" className="block text-gray-700 font-medium hover:text-[#0F52BA]">About</a>
                                <a href="#" className="block text-gray-700 font-medium hover:text-[#0F52BA]">Blog</a>
                                <a href="#" className="block text-gray-700 font-medium hover:text-[#0F52BA]">Pages</a>
                                <a href="#" className="block text-gray-700 font-medium hover:text-[#0F52BA]">Contact</a>
                                <button className="w-full bg-[#0F52BA] text-white px-6 py-3 rounded font-medium shadow-md">
                                    Make a Donate
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;