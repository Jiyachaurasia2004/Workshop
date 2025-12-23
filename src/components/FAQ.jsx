import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Will I Get a Job After Completing This Course?",
            answer: "While we provide comprehensive training and support, job placement ultimately depends on your skills and efforts. We'll equip you with the knowledge and tools you need to pursue a career in your chosen field."
        },
        {
            question: "Is There Project Training Included in the Course?",
            answer: "Yes, the course includes multiple minor and major projects, including a full-stack Capstone project to ensure hands-on experience."
        },
        {
            question: "What Is the Highest Package That Your Students Have Received?",
            answer: "Our students have bagged packages ranging from 5 LPA to 24 LPA depending on their prior experience and performance in the course."
        },
        {
            question: "Is Two Months Sufficient to Secure a Job?",
            answer: "For dedicated learners, our intensive curriculum is designed to get you job-ready. However, it requires consistent effort and practice."
        },
        {
            question: "Can Freshers Enroll in This Course?",
            answer: "Absolutely! The course starts from the basics and assumes no prior programming knowledge, making it perfect for freshers."
        }
    ];

    return (
        <div className="py-20 bg-white" id='faq'>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Got questions? We've got answers.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-900">{index + 1}. {faq.question}</span>
                                {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-4 text-gray-600 leading-relaxed pl-2">
                                            {faq.answer}
                                        </p>
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

export default FAQ;
