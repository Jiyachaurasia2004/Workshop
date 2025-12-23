import React from 'react';
import { motion } from 'framer-motion';

const Certificate = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Get Certified from <span className="text-primary">BeanGate</span> For Success
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Course completion certificate will be awarded on successful course completion and upon scoring above 60% marks in the quiz consistently throughout the program. A value add-on to your LinkedIn Profile that can grab the attention of our hiring partners and top big data companies. Upon successful completion of the this course, we will provide the course completion certificate.
                        </p>
                        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-colors">
                            Claim Your Spot
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative bg-white p-2 rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-gray-800">
                            {/* Placeholder for Certificate Image - using a gradient/CSS representation if image not available */}
                            <div className="aspect-[4/3] bg-amber-50 rounded-lg border-4 border-double border-amber-200 p-8 flex flex-col items-center text-center justify-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-amber-400 rounded-tl-3xl opacity-50"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-amber-400 rounded-br-3xl opacity-50"></div>

                                <h3 className="text-3xl font-serif text-gray-800 mb-2 font-bold tracking-widest uppercase">Certificate</h3>
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Of Appreciation</p>

                                <p className="text-sm text-gray-600 italic mb-2">This certificate is proudly presented to</p>
                                <h4 className="text-4xl font-script text-primary mb-6 font-bold">Mariah Doe</h4>

                                <p className="text-[10px] text-gray-400 max-w-sm mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="flex justify-between w-full max-w-xs px-8 mt-auto">
                                    <div className="border-t border-gray-400 pt-1 text-xs text-gray-500 w-20">DATE</div>
                                    <div className="border-t border-gray-400 pt-1 text-xs text-gray-500 w-20">SIGNATURE</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
