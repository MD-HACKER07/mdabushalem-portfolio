import React from 'react';
import Window from '../base/window';

export default function AboutMD() {
    return (
        <div className="p-5 text-white overflow-y-auto h-full">
            <div className="flex flex-col items-center mb-8">
                <img 
                    src="./images/MD ABU SHALEM ALAM.jpg" 
                    alt="MD Abu Shalem Alam" 
                    className="w-48 h-48 rounded-full mb-4 object-cover border-4 border-blue-500"
                />
                <h1 className="text-3xl font-bold">MD ABU SHALEM ALAM</h1>
                <p className="text-xl text-gray-400">Cybersecurity Administrator</p>
                <div className="flex space-x-4 mt-4">
                    <a href="https://linkedin.com/in/mdabushalem" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/mdabushalem" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md flex items-center">
                        <span>GitHub</span>
                    </a>
                    <a href="./resume/md_abu_shalem (1).pdf" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center">
                        <span>Resume</span>
                    </a>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Hi, I'm Md Abu Shalem Alam, a passionate tech enthusiast with a background in cybersecurity and AI development. 
                    With hands-on experience in software testing, threat detection, and data analysis, I love solving complex problems 
                    and building innovative solutions. My portfolio showcases projects that blend technology with creativity, from AI-driven 
                    applications to cybersecurity solutions that prioritize safety.
                </p>
                <div className="mt-4 p-4 bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">Featured Projects:</h3>
                    <ul className="space-y-2 text-white">
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-2 font-bold">•</span> 
                            <a href="https://aidoctor.cloud" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline font-medium">aidoctor.cloud</a>
                            <span className="ml-2">- an online healthcare platform</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-2 font-bold">•</span> 
                            <a href="https://smartpandit.org" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline font-medium">smartpandit.org</a>
                            <span className="ml-2">- a digital Pandit booking service</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-2 font-bold">•</span> 
                            <a href="https://traderai.cloud" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline font-medium">traderai.cloud</a>
                            <span className="ml-2">- an intelligent market analysis tool</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-2 font-bold">•</span> 
                            <a href="https://suyogenterprises.in" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline font-medium">suyogenterprises.in</a>
                            <span className="ml-2">- a home painting Website Service</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-3 text-blue-400">Technical Skills</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Threat Detection & Prevention
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> AI & Machine Learning
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Network Security
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Penetration Testing
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Vulnerability Assessment
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Data Encryption & Cryptography
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-3 text-blue-400">Soft Skills</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Observational Skills
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Creativity
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Risk Assessment & Management
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Communication Skills
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Time Management
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">•</span> Adaptability & Attention to Detail
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Projects</h2>
                <div className="space-y-6">
                    <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-400">
                            <a href="https://aidoctor.cloud" target="_blank" rel="noreferrer" className="hover:underline flex items-center">
                                AI Doctor
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </h3>
                        <p className="text-gray-400 mt-1">2023 - Present</p>
                        <p className="text-gray-300 mt-2">
                            Developed an online healthcare platform (aidoctor.cloud) that connects patients with healthcare 
                            professionals, provides AI-driven preliminary diagnoses, and helps schedule appointments.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">React.js</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">AI Integration</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Healthcare</span>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-yellow-500">
                        <h3 className="text-xl font-semibold text-blue-400">
                            <a href="https://traderai.cloud" target="_blank" rel="noreferrer" className="hover:underline flex items-center">
                                Trader AI
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </h3>
                        <p className="text-gray-400 mt-1">2022 - Present</p>
                        <p className="text-gray-300 mt-2">
                            Created an intelligent market analysis tool (traderai.cloud) that leverages AI to analyze 
                            market trends, provide trading insights, and help investors make informed decisions.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Data Analysis</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Financial Tech</span>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-green-500">
                        <h3 className="text-xl font-semibold text-blue-400">
                            <a href="https://smartpandit.org" target="_blank" rel="noreferrer" className="hover:underline flex items-center">
                                Smart Pandit
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </h3>
                        <p className="text-gray-400 mt-1">2022</p>
                        <p className="text-gray-300 mt-2">
                            Developed a digital Pandit booking service (smartpandit.org) that enables users to book 
                            religious ceremonies, consult with pandits online, and schedule pujas.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Web Development</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Booking System</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Cultural Service</span>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-purple-500">
                        <h3 className="text-xl font-semibold text-blue-400">
                            <a href="https://suyogenterprises.in" target="_blank" rel="noreferrer" className="hover:underline flex items-center">
                                Suyog Enterprises
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </h3>
                        <p className="text-gray-400 mt-1">2023</p>
                        <p className="text-gray-300 mt-2">
                            Created a comprehensive website for a home painting service (suyogenterprises.in) that 
                            allows customers to browse painting options, request quotes, and schedule services.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Web Design</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">E-commerce</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Service Business</span>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-blue-400">Cybersecurity Awareness Program</h3>
                        <p className="text-gray-400 mt-1">2023 - 2024</p>
                        <p className="text-gray-300 mt-2">
                            Developed and conducted comprehensive cybersecurity awareness seminars for schools, 
                            educating students and staff on online safety practices, phishing prevention, and 
                            secure digital behavior.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Security Education</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Public Speaking</span>
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Workshop Facilitation</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Experience</h2>
                <div className="space-y-6">
                    <div className="bg-gray-800 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-blue-400">Cybersecurity Specialist</h3>
                        <p className="text-gray-400 mt-1">Arosys Technologies | 2024 - Present</p>
                        <ul className="mt-2 space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span> 
                                <span>Developed and implemented strategies to identify and mitigate security threats</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span> 
                                <span>Conducted vulnerability assessments and penetration testing to enhance system security</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span> 
                                <span>Ensured compliance with security standards and managed incident response efforts</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-blue-400">Co-leader of Red Team</h3>
                        <p className="text-gray-400 mt-1">Cybersecurity Specialist and Awareness Advocate | 2022 - Present</p>
                        <ul className="mt-2 space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span> 
                                <span>Gained hands-on experience in executing various cybersecurity attacks for educational purposes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span> 
                                <span>Explored system vulnerabilities and understood the mechanics behind different types of cyber threats</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span> 
                                <span>Delivered seminars and workshops at multiple schools to raise awareness about cybersecurity</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Education</h2>
                <div className="space-y-6">
                    <div className="bg-gray-800 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-blue-400">B-Tech in Cyber Security</h3>
                        <p className="text-gray-400 mt-1">Sanjivani University | 2024 - 2027</p>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-blue-400">Diploma in Computer Technology</h3>
                        <p className="text-gray-400 mt-1">Sanjivani K.B.P Polytechnic | 2021 - 2024</p>
                        <p className="text-gray-300 mt-2">Grade: First Class Distinction</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Interests</h2>
                <div className="bg-gray-800 rounded-lg p-5">
                    <ul className="grid grid-cols-2 gap-3 text-gray-300">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">•</span> Traveling
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">•</span> Travel Photography
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">•</span> Hacking
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">•</span> Editing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export const displayAboutMD = (closeWindow, hideWindow, isActive) => {
    if (closeWindow !== undefined && hideWindow !== undefined && isActive !== undefined) {
        return (
            <Window
                closeWindow={closeWindow}
                hideWindow={hideWindow}
                isActive={isActive}
                title="About MD"
                appIcon="./themes/Yaru/system/user-home.png"
            >
                <AboutMD />
            </Window>
        );
    } else {
        return <AboutMD />;
    }
} 