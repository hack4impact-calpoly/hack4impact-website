import React from 'react';
import { InfoCardItem } from '../utils/types';

const InfoCard: React.FC<InfoCardItem> = (props: InfoCardItem): React.ReactElement => {
  const { title, body, image } = props;

  return (
    <div className="space-y-4">
      {image && (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={image.url.toString()}
          alt={image.alt?.toString()}
          width={384}
          height={264}
          className="object-cover rounded-md h-52"
        />
      )}
      <div className="space-y-2 max-w-sm">
        <h4>{title}</h4>
        <p className="leading-7">{body}</p>
      </div>
    </div>
  );
};

export default InfoCard;
