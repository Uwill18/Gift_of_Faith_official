import React, { useState, useEffect } from 'react';
import data from '../../../utils/image-gallery.json'

function ImageColumn({ imageUrls }) {
  return (
    <div className="image-column">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}

function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from JSON file
    fetch(data)
      .then(response => response.json())
      .then(data => setImages(data.images))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  // Calculate the number of images per column
  const imagesPerColumn = Math.ceil(images.length / 2);

  // Slice the images array into two parts
  const column1Images = images.slice(0, imagesPerColumn);
  const column2Images = images.slice(imagesPerColumn);

  return (
    <div className="image-grid">
      <ImageColumn imageUrls={column1Images} />
      <ImageColumn imageUrls={column2Images} />
    </div>
  );
}

export default ImageGrid;