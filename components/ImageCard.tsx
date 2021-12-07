import React from 'react';
import Image from 'next/image';
import { ImageItem } from '../utils/types';

const ImageCard = (props: ImageItem) => {
  const { img, alt } = props;

  return (
    <div className="w-11/12 mx-auto">
      <Image src={img as string} alt={alt.toString()} height="420" className="object-cover rounded-md" />
    </div>
  );
};

export default ImageCard;
