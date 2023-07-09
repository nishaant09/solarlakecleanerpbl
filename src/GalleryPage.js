import React, { useState } from 'react';

const GalleryPage = ({ handleShowResults }) => {
  const [galleryItems, setGalleryItems] = useState([]);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    const newGalleryItems = Array.from(files).map((file) => {
      return {
        name: file.name,
        url: URL.createObjectURL(file),
      };
    });
    setGalleryItems((prevItems) => [...prevItems, ...newGalleryItems]);
  };

  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <input type="file" multiple onChange={handleFileUpload} />
      <div className="gallery-items">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            {item.type.startsWith('image/') ? (
              <img src={item.url} alt={item.name} />
            ) : (
              <video src={item.url} controls />
            )}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <button onClick={handleShowResults}>Show Results</button>
    </div>
  );
};

export default GalleryPage;
