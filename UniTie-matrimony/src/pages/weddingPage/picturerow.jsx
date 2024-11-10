import React from 'react';
import './wedding.css';

const PictureRow = ({ src, heading, text }) => {
  return (
    <div className="picture-row">
      <div className="picture">
        <img src={src} alt="Picture" />
      </div>
      <div className="description">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
const PictureRow1 = ({ heading, text,src }) => {
  return (
    <div className="picture-row1">
      <div className="description">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="picture">
        <img src={src} alt="Picture" />
      </div>

    </div>
  );
};
export  {PictureRow,PictureRow1};
