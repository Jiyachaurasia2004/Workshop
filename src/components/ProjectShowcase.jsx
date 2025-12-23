import React from 'react';
import { Code, Server, Database, Lock, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectShowcase = () => {
    const projects = [
        {
            icon: <Code className="w-6 h-6 text-blue-600" />,
            title: "React",
            desc: "Create Web applications using React."
        },
        {
            icon: <Layers className="w-6 h-6 text-green-600" />,
            title: "Spring-based Applications",
            desc: "Create robust applications using Spring Framework core features."
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-600" />,
            title: "Real-time Projects",
            desc: "Gain hands-on experience through real-time projects."
        },
        {
            icon: <Lock className="w-6 h-6 text-purple-600" />,
            title: "REST APIs",
            desc: "Develop and secure RESTful APIs with Spring Boot."
        },
        {
            icon: <Server className="w-6 h-6 text-indigo-600" />,
            title: "Projects",
            desc: "Complete a project involving Restful Web Services."
        },
        {
            icon: <Database className="w-6 h-6 text-red-600" />,
            title: "Database Integration",
            desc: "Set up and integrate in-memory databases with H2 DB."
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What you'll <span className="text-primary">Build</span></h2>
                    <p className="text-gray-600">Hands-on experience with core technologies.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all bg-white"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                            <p className="text-gray-600 mb-6">{project.desc}</p>
                            <div className="flex items-center text-sm font-semibold text-gray-400 uppercase tracking-wide">
                                LEARN MORE
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
