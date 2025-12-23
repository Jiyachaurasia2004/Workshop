import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileCode, Server, Database, Layers, Layout, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Curriculum = () => {
    const [openModule, setOpenModule] = useState(0);

    const modules = [
        {
            title: "Month 1: Core Java & Data Structures",
            duration: "Month 1",
            topics: ["Introduction to Java & OOPs", "Control Statements & Loops", "Arrays & Strings", "Data Structures & Algorithms Basics"]
        },
        {
            title: "Month 2: Servlet, JDBC And React",
            duration: "Month 2",
            topics: ["Servlet Lifecycle & Handling Requests", "JDBC Connection & Operations", "React Components & State", "Connecting Backend with Frontend"]
        },
        {
            title: "Month 3: SpringBoot Framework And Docker",
            duration: "Month 3",
            topics: ["Spring Boot Basics & Annotations", "Dependency Injection", "Docker Containers & Images", "Deploying Spring Boot Applications"]
        },
        {
            title: "Month 4: Microservices And Kafka",
            duration: "Month 4",
            topics: ["Microservices Architecture", "Service Discovery & Registry", "Apache Kafka Basics", "Message Queues & Event Driven Architecture"]
        },
        {
            title: "Interview Preparation",
            duration: "Ongoing",
            topics: ["Resume Building", "Mock Interviews", "Aptitude & Logical Reasoning", "HR Round Preparation"]
        },
        {
            title: "Minor Projects",
            duration: "Practice",
            topics: ["Library Management System", "Employee Dashboard", "Weather App", "To-Do List with Persistence"]
        },
        {
            title: "Major Projects",
            duration: "Capstone",
            topics: ["E-Commerce Platform", "Social Media Clone", "Banking Application", "Live Deployment"]
        }
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
                    <p className="text-gray-600">A structured path to becoming a professional developer.</p>
                </div>

                <div className="space-y-4">
                    {modules.map((module, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <button
                                onClick={() => setOpenModule(openModule === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${openModule === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-semibold ${openModule === index ? 'text-primary' : 'text-gray-900'}`}>{module.title}</h3>
                                        <p className="text-sm text-gray-500">{module.duration}</p>
                                    </div>
                                </div>
                                {openModule === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>

                            <AnimatePresence>
                                {openModule === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pt-0 border-t border-gray-50 bg-gray-50/50">
                                            <ul className="mt-4 space-y-3">
                                                {module.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-center space-x-3 text-gray-700">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Curriculum;
