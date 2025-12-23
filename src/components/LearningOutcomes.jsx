import React from 'react';
import { Check } from 'lucide-react';

const LearningOutcomes = () => {
    const outcomes = [
        "Master HTML5, CSS3, and Modern JavaScript (ES6+)",
        "Build responsive UIs with React and Tailwind CSS",
        "State Management with Redux Toolkit and Context API",
        "Server-side development with Node.js and Express",
        "Database design and management with MongoDB",
        "Authentication and Authorization using JWT",
        "RESTful API design and implementation",
        "Version Control with Git and GitHub",
        "Deployment and CI/CD pipelines",
        "System Design basics and performance optimization"
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">What you'll learn</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our curriculum is designed to make you job-ready. You'll go from the basics to advanced concepts with hands-on practice.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {outcomes.map((outcome, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <span className="text-gray-700 font-medium">{outcome}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                                Download Syllabus
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-gray-900 text-white rounded-3xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold mb-6">Why choose BeanGate?</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Industry Expert Mentors</h4>
                                    <p className="text-gray-400">Learn directly from developers working at to product-based companies.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-300 mb-2">1:1 Doubt Support</h4>
                                    <p className="text-gray-400">Instant doubt resolution via Zoom/Meet to ensure you never get stuck.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Career Services</h4>
                                    <p className="text-gray-400">Resume reviews, mock interviews, and direct referrals to hiring partners.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningOutcomes;
