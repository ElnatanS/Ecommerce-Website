import React from "react";
import BiggerPic from "./images/image-product-1.jpg";
import Thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "./images/image-product-4-thumbnail.jpg";
const SidePicture = () => {
  return(
    <>
      <div className="sidepicture">
        <img className="lg-thumbnail" src={BiggerPic} alt="bigger pic" />
        <div className="thumbnail">
          <img className="sm-thumbnail" src={Thumbnail1} alt="thumbnail pic" />
          <img className="sm-thumbnail" src={Thumbnail2} alt="thumbnail pic" />
          <img className="sm-thumbnail" src={Thumbnail3} alt="thumbnail pic" />
          <img className="sm-thumbnail" src={Thumbnail4} alt="thumbnail pic" />
        </div>
      </div>
    </>
  )
}

export default SidePicture;