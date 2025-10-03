import React, { useState, useEffect } from 'react';
const image1 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal1.jpg'
const image2 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal2.jpg'
const image3 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal3.jpg'
const image4 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal4.jpg'
const image5 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal5.jpg'
const image6 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal6.jpg'
const image7 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal7.jpg'
const image8 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal8.jpg'
const image9 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal9.jpg'
const image10 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal10.jpg'
const image11 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal11.jpeg'
const image12 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal12.jpeg'
const image13 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal13.jpeg'
const image14 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal14.jpeg'
const image15 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal15.jpeg'
const image16 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal16.jpeg'
const image17 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal17.jpeg'
const image18 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal18.jpeg'
const image19 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal19.jpeg'
const image20 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//gal20.jpeg'

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
  const [showAllImages, setShowAllImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigateImage = (direction) => {
    const newIndex = (currentImageIndex + direction + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        navigateImage(1);
      } else if (e.key === 'ArrowLeft') {
        navigateImage(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, currentImageIndex]);

  const renderImageGrid = () => {
    const imagesToShow = showAllImages ? images : images.slice(0, 8);
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {imagesToShow.map((image, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-gray-700 hover:border-orange-500/70"
          >
            <img
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onClick={() => openModal(image, index)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full bg-gray-900/90 backdrop-blur-sm p-4 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-semibold">{image.description}</p>
            </div>
            {/* Zoom icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-orange-500/80 p-2 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id='galary' className="relative bg-gray-900 py-20 px-6 text-center">
      <h2 className="text-5xl font-extrabold mb-12 text-red-700 drop-shadow-lg">Gallery</h2>
      <div className="container mx-auto relative z-10">
        {renderImageGrid()}
        {!showAllImages && (
          <button
            className="mt-8 px-8 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
            onClick={() => setShowAllImages(true)}
          >
            See More Images
          </button>
        )}
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/90 backdrop-blur-sm animate-fadeIn"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-5xl max-h-[90vh] mx-4 animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors text-4xl font-bold z-10"
              >
                ×
              </button>
              
              {/* Previous button */}
              <button
                onClick={() => navigateImage(-1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500/80 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Next button */}
              <button
                onClick={() => navigateImage(1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500/80 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <img
                className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
                src={selectedImage.src}
                alt={selectedImage.alt}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-semibold">{selectedImage.description}</p>
                <p className="text-gray-400 text-sm mt-2">Image {currentImageIndex + 1} of {images.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
