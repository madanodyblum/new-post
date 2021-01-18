import React, { useRef } from "react";
import MediaNameSpace from "./interfaces";
export default ({
  img,
  kindMedia,
  isMoreMedia,
  countMedia,
  file,
}: MediaNameSpace.IMedia) => {
  const preview = useRef(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      preview.current.src = reader.result;
    },
    false,
  );
  return (
    <div className={`file-preview ${kindMedia}`}>
      <div className="preview-inner">
        <img ref={preview} src={img} alt="image-name" />
      </div>
      {isMoreMedia && (
        <div className="added-file-number">
          <span>+{countMedia}</span>
        </div>
      )}
    </div>
  );
};
