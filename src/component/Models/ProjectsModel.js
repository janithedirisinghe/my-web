import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ProjectModal({ isOpen, onClose, project }) {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 md:p-8">
            <div
                onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
                className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl w-full relative overflow-y-auto max-h-[85vh] md:max-h-[90vh]"
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>

                {/* Project Title */}
                <h2 className="text-3xl font-bold mb-4 text-white text-center">{project.title}</h2>

                {/* Project Description */}
                <div className="mb-6">
                    <p className="text-gray-300 text-justify text-sm sm:text-base leading-relaxed max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                        {project.description}
                    </p>
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-red-500">Technologies Used</h3>
                    <ul className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.map((technology, index) => (
                            <li key={index} className="text-gray-100 bg-gray-700 px-4 py-2 rounded-full text-sm shadow-sm hover:bg-gray-600 transition duration-200">
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Project Images */}
                {project.images && project.images.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-red-500">Project Images</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {project.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Project image ${index + 1}`}
                                    className="w-full h-40 object-cover rounded-md hover:scale-105 transform transition duration-300"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Video Section */}
                {project.videoUrl && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-red-500">Project Demo</h3>
                        <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-md">
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

export default ProjectModal;
