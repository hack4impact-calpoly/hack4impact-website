import React from 'react';
import { ImageItem } from '../utils/types';

const ImageCard = (props: ImageItem) => {
  const { img, alt } = props;

  return (
    <div className="md:w-11/12 mx-auto">
      <img src={img.toString()} alt={alt.toString()} height="420" className="object-cover rounded-md" />
    </div>
  );
};

export default ImageCard;
