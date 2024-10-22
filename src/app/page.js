"use client";
import { useState } from "react";
const Picture = () => {
  const [imgFile, setImgFile] = useState(null);
  const [uploadImg, setUploadImg] = useState();
  const picFile = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };
  console.log(imgFile);

  const picUpload = async () => {
    const formData = new FormData();
    formData.append("file", imgFile),
      formData.append("upload_preset", "picture"),
      formData.append("cloud_name", "diwbjvip9");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diwbjvip9/image/upload",

      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    setUploadImg(data.secure_url);
  };

  return (
    <div>
      <div className="pic">
        <input
          type="file"
          onChange={(e) => picFile(e)}
          accept="image/*"
        ></input>
        <div className="picStyle">
          <button onClick={picUpload} className="uploadButton">
            upload🤔
          </button>
          {uploadImg && <img height={200} width={200} src={uploadImg} />}
        </div>
      </div>
    </div>
  );
};
export default Picture;
