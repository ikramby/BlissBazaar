// UploadFile.js
import React, { useState } from "react";
import axios from "axios";

const UploadFile = ({ onFileUpload }) => {
  const [presetKey] = useState("qael7yj7");
  const [cloudName] = useState("dsozaejvw");

  const handleFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);

    axios
      .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
      .then((res) => {
        console.log(res.data);
        onFileUpload(res.data.secure_url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return <input type="file" accept="image/*" onChange={handleFile} />;
};

export default UploadFile;
