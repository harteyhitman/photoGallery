import React from "react";
import "./App.css";
import { photos } from "./Photos";



function App() {
  return (
    <div className="digital-img">
      <div className="galleria">
        <h1>galleria</h1>
        <p>START SLIDESHOW</p>
      </div>
      <div className="photo-gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          <img src={photo.imgs} alt={photo.caption} />
          <div className="description">
          <h1 className="caption">{photo.caption}</h1>
          <p className="text">{photo.text}</p></div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
