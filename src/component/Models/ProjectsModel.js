import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ProjectModal({ isOpen, onClose, project }) {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 ">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-700">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-300 text-center">{project.title}</h2>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-red-600">Technologies Used:</h3>
                    <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((technology, index) => (
                            <li key={index} className="text-gray-300 bg-gray-700 px-4 py-2 rounded">{technology}</li>
                        ))}
                    </ul>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe width="100%" height="200px" src={project.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
