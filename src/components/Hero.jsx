import React from 'react';
import { Check, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block border border-blue-200 text-blue-600 px-3 py-1 text-sm font-medium mb-6 bg-blue-50/50">
                            Live classes
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                            SPARK BATCH 3.0 - 100% Job Ready <span className="text-primary">Java Full Stack</span> (For Beginner and Experienced)
                        </h1>

                        <p className="text-base text-gray-600 mb-8 leading-relaxed">
                            This 4-month course is tailored to equip you with the skills needed to build both the backend (the behind-the-scenes functionality) and the frontend (the user interface) of web applications. Gain proficiency in essential technologies to thrive in the dynamic field of software development.
                        </p>

                        <div className="mb-8">
                            <h3 className="font-bold text-gray-900 mb-4">Course includes:</h3>
                            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                                {[
                                    'Real time projects',
                                    'Weekend sessions',
                                    '120 + hours of core teaching',
                                    'Resume assistance',
                                    'Certificate of completion',
                                    'Live Doubts clearing session',
                                    'Bonus sessions',
                                    'Access to recordings'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start space-x-2">
                                        <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Course Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                            {/* Card Header Image Area - Blue Theme Gradient */}
                            <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-6 sm:p-8 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="text-yellow-400 font-script text-xl mb-1">Job Ready</div>
                                    <h2 className="text-2xl font-bold uppercase leading-tight mb-1">SPARK 3.0 : ULTIMATE</h2>
                                    <h2 className="text-2xl font-bold uppercase leading-tight text-blue-300 mb-6">FULL STACK JAVA <span className="text-white">COURSE</span></h2>

                                    <ul className="space-y-1 text-sm text-gray-200">
                                        <li>• Live Masterclasses</li>
                                        <li>• Experienced Instructor</li>
                                        <li>• Access to recording</li>
                                        <li>• Project Based Learning</li>
                                        <li>• Bonus Sessions</li>
                                    </ul>

                                    <div className="absolute bottom-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                        LIVE •
                                    </div>
                                </div>
                                {/* Decorative Circles */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            </div>

                            <div className="p-6">
                                <div className="mb-2 text-sm text-gray-500">Full course Price</div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-baseline space-x-3">
                                        <span className="text-3xl font-bold text-primary">₹4,590</span>
                                        <span className="text-lg text-gray-400 line-through">₹14,999</span>
                                    </div>
                                    <div className="bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded text-sm">
                                        67% Off
                                    </div>
                                </div>

                                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg transition-colors text-lg shadow-md">
                                    Book your seat now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
