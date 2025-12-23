import React from 'react';
import { Gift, Briefcase, UserCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Bonuses = () => {
    const bonuses = [
        {
            icon: <Briefcase className="w-8 h-8 text-pink-600" />,
            title: "Real-World Industry Insights",
            desc: "Learn how top tech companies operate and what they expect."
        },
        {
            icon: <UserCircle className="w-8 h-8 text-pink-600" />,
            title: "Mock Interviews",
            desc: "Practice with industry experts to crack tough technical rounds."
        },
        {
            icon: <Gift className="w-8 h-8 text-pink-600" />,
            title: "Personal Branding",
            desc: "Optimize your LinkedIn and online presence to attract recruiters."
        },
        {
            icon: <FileText className="w-8 h-8 text-pink-600" />,
            title: "Resume Review + Resume Building",
            desc: "Craft a ATS-friendly resume that gets shortlisted."
        }
    ];

    return (
        <div className="py-20 bg-gradient-to-br from-pink-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Bonuses</h2>
                    <p className="text-gray-600">Extra value to accelerate your career growth.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bonuses.map((bonus, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-pink-100 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-6">
                                {bonus.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{bonus.title}</h3>
                            <p className="text-gray-500">{bonus.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bonuses;
