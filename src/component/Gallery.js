import React, { useState } from 'react';

const images = [
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    alt: 'Image 1',
    description: 'Description for Image 1',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    alt: 'Image 2',
    description: 'Description for Image 2',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    alt: 'Image 3',
    description: 'Description for Image 3',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    alt: 'Image 4',
    description: 'Description for Image 4',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    alt: 'Image 5',
    description: 'Description for Image 5',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    alt: 'Image 6',
    description: 'Description for Image 6',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    alt: 'Image 7',
    description: 'Description for Image 7',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    alt: 'Image 8',
    description: 'Description for Image 8',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    alt: 'Image 9',
    description: 'Description for Image 9',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
    alt: 'Image 10',
    description: 'Description for Image 10',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    alt: 'Image 11',
    description: 'Description for Image 11',
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
    alt: 'Image 12',
    description: 'Description for Image 12',
  },
  // Add more images as needed
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderImageGrid = (startIndex, endIndex) => {
    return (
      <div className="grid gap-4">
        {images.slice(startIndex, endIndex).map((image, index) => (
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
        <h2 className="text-4xl font-bold mb-20 text-white">Gallery</h2>
      <div className="p-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {renderImageGrid(0, 3)}
          {renderImageGrid(3, 6)}
          {renderImageGrid(6, 9)}
          {renderImageGrid(9, 12)}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75"
            onClick={closeModal}
          >
            <div className="bg-white p-6 rounded-lg max-w-3xl relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-700"
              >
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
