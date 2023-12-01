import React, { useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [image, setImage] = useState(null);
  const [presetKey, setPresetKey] = useState("qael7yj7");
  const [cloudName, setCloudName] = useState("dsozaejvw");

  function handleFile(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);

    axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFile} />
    </div>
  );
};

export default UploadFile;
