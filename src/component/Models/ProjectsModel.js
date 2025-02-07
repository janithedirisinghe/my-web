import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ProjectModal({ isOpen, onClose, project }) {
    if (!isOpen) return null;

    return (
        <div 
            onClick={onClose} 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 md:p-8"
        >
            <div
                onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
                className="backdrop-blur-lg bg-white/10 p-6 md:p-8 rounded-2xl shadow-2xl max-w-4xl w-full max-h-screen overflow-auto flex flex-col scrollbar-hide"
            >
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-200 hover:text-white transition duration-200"
                >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>

                {/* Project Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white text-center">
                    {project.title}
                </h2>

                {/* Project Description */}
                <div className="mb-4 md:mb-6 px-2 md:px-4">
                    <p className="text-gray-100 text-center text-sm md:text-base leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Technologies Used */}
                <div className="mb-4 md:mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-blue-400 text-center">Technologies Used</h3>
                    <ul className="flex flex-wrap justify-center gap-2">
                        {project.technologies.map((tech, index) => (
                            <li 
                                key={index} 
                                className="bg-white/20 text-gray-200 px-4 py-2 rounded-full text-sm shadow-md hover:bg-white/30 transition"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Project Images */}
                {project.images && project.images.length > 0 && (
                    <div className="mb-4 md:mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-blue-400 text-center">Project Images</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {project.images.map((image, index) => (
                                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={image}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-32 md:h-40 object-cover rounded-lg hover:scale-105 transform transition duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Video Section */}
                {project.videoUrl && (
                    <div className="mb-4 md:mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-blue-400 text-center">Project Demo</h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src={`https://www.youtube.com/embed/${project.videoUrl}`}
                                title="Project Video"
                                frameBorder="0"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Add the following CSS to your global stylesheet or a CSS module
// .scrollbar-hide::-webkit-scrollbar {
//     display: none;
// }
// .scrollbar-hide {
//     -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */
// }

export default ProjectModal;
