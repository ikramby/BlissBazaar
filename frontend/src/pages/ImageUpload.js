// ImageUpload.js
import React, { useState } from 'react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState('');
  const [presetKey] = useState("qael7yj7");
  const [cloudName] = useState("dsozaejvw");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_unsigned_upload_preset');

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setImage(data.secure_url);
      onUpload(data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {image && (
        <div>
          <p>Uploaded Image:</p>
          <img src={image} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
