import React, { useState } from 'react';
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

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderImageGrid = () => {
    const imagesToShow = showAllImages ? images : images.slice(0, 8);
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imagesToShow.map((image, index) => (
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
    <div id='galary' className="relative bg-gray-900 p-5 text-center">
      <h2 className="text-5xl font-extrabold mb-8 text-red-700 drop-shadow-lg">Gallery</h2>
      <div className="p-4 relative z-10">
        {renderImageGrid()}
        {!showAllImages && (
          <button
            className="mt-4 px-4 py-2 bg-red-700 text-white rounded-lg"
            onClick={() => setShowAllImages(true)}
          >
            See More
          </button>
        )}
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
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-transparent opacity-25 animate-pulse"></div> */}
    </div>
  );
}

export default Gallery;
