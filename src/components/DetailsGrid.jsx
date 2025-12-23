import React from 'react';
import { Calendar, Clock, Globe, Award, BookOpen, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

const DetailsGrid = () => {
    const details = [
        {
            icon: <Calendar className="w-6 h-6 text-blue-600" />,
            title: "Batch Starts",
            value: "25th Oct 2023",
            desc: "Limited seats available"
        },
        {
            icon: <Clock className="w-6 h-6 text-blue-600" />,
            title: "Course Duration",
            value: "6 Months",
            desc: "12 hours/week commitment"
        },
        {
            icon: <MonitorPlay className="w-6 h-6 text-blue-600" />,
            title: "Mode of Class",
            value: "Live Online",
            desc: "Interactive Zoom sessions"
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: "Language",
            value: "English / Hindi",
            desc: "Comfortable communication"
        },
        {
            icon: <BookOpen className="w-6 h-6 text-blue-600" />,
            title: "Projects",
            value: "5+ Real-World",
            desc: "Industry level complexity"
        },
        {
            icon: <Award className="w-6 h-6 text-blue-600" />,
            title: "Certification",
            value: "ISO Certified",
            desc: "Globally recognized"
        }
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Details</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to know about the Full Stack Development program.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {details.map((detail, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                {detail.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{detail.title}</h3>
                            <p className="text-xl font-bold text-primary mb-1">{detail.value}</p>
                            <p className="text-sm text-gray-500">{detail.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailsGrid;
