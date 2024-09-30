import React, { useState } from 'react';
import image1 from './images/gal1.jpg'
import image2 from './images/gal2.jpg'
import image3 from './images/gal3.jpg'
import image4 from './images/gal4.jpg'
import image5 from './images/gal5.jpg'
import image6 from './images/gal6.jpg'
import image7 from './images/gal7.jpg'
import image8 from './images/gal8.jpg'
import image9 from './images/gal9.jpg'
import image10 from './images/gal10.jpg'
import image11 from './images/gal11.jpeg'
import image12 from './images/gal12.jpeg'
import image13 from './images/gal13.jpeg'
import image14 from './images/gal14.jpeg'
import image15 from './images/gal15.jpeg'
import image16 from './images/gal16.jpeg'
import image17 from './images/gal17.jpeg'
import image18 from './images/gal18.jpeg'
import image19 from './images/gal19.jpeg'
import image20 from './images/gal20.jpeg'

const images = [
  { src: image1, alt: 'Image 1', description: 'Description for Image 1' },
  { src: image2, alt: 'Image 2', description: 'Description for Image 2' },
  { src: image5, alt: 'Image 3', description: 'Description for Image 3' },
  { src: image4, alt: 'Image 4', description: 'Description for Image 4' },
  { src: image3, alt: 'Image 5', description: 'Description for Image 5' },
  { src: image6, alt: 'Image 6', description: 'Description for Image 6' },
  { src: image7, alt: 'Image 7', description: 'Description for Image 7' },
  { src: image8, alt: 'Image 8', description: 'Description for Image 8' },
  { src: image9, alt: 'Image 9', description: 'Description for Image 9' },
  { src: image10, alt: 'Image 10', description: 'Description for Image 10' },
  { src: image11, alt: 'Image 11', description: 'Description for Image 11' },
  { src: image12, alt: 'Image 12', description: 'Description for Image 12' },
  { src: image13, alt: 'Image 13', description: 'Description for Image 13' },
  { src: image14, alt: 'Image 14', description: 'Description for Image 14' },
  { src: image15, alt: 'Image 15', description: 'Description for Image 15' },
  { src: image16, alt: 'Image 16', description: 'Description for Image 16' },
  { src: image17, alt: 'Image 17', description: 'Description for Image 17' },
  { src: image18, alt: 'Image 18', description: 'Description for Image 18' },
  { src: image19, alt: 'Image 19', description: 'Description for Image 19' },
  { src: image20, alt: 'Image 20', description: 'Description for Image 20' },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderImageGrid = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              className="h-300 max-w-full rounded-lg cursor-pointer group-hover:opacity-80 transition duration-300"
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(image)}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-75 p-2 text-white text-center opacity-0 group-hover:opacity-100 transition duration-300">
              {image.description}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative  bg-gray-900 p-5 text-center">
      <h2 className="text-5xl font-extrabold mb-8 text-red-700 drop-shadow-lg">Gallery</h2>
      <div className="p-4 relative z-10">
        {renderImageGrid()}
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75"
            onClick={closeModal}
          >
            <div className="bg-white p-6 rounded-lg max-w-3xl relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-700">
                &times;
              </button>
              <img
                className="h-auto max-w-full rounded-lg"
                src={selectedImage.src}
                alt={selectedImage.alt}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-75 p-4 text-white">
                {selectedImage.description}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-transparent opacity-25 animate-pulse"></div>
    </div>
  );
}

export default Gallery;
