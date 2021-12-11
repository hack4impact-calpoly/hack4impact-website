import React from 'react';
import Image from 'next/image';
import { TestimonalProps } from '../utils/types';
import LinkedinLogo from './LinkedinLogo';

const Testimonial = (props: TestimonalProps) => {
  const { member, quote } = props;

  return (
    <div className="flex bg-white filter drop-shadow-md rounded-md mb-4">
      <div className="hidden md:flex flex-grow w-1/3">
        <Image
          src={member.headshot.url.toString()}
          alt=""
          width="600"
          height="590"
          objectFit="cover"
          className="h-100 rounded-l-md"
        />
      </div>

      <div className="md:w-2/3 px-6 py-6 md:px-12 md:py-8 space-y-4 flex flex-col justify-center">
        <p>{`"${quote}"`}</p>
        <div className="space-y-0 text-center md:text-left">
          <div className="w-64 md:hidden mx-auto pt-4">
            <Image
              src={member.headshot.url.toString()}
              alt=""
              width="100"
              height="100"
              objectFit="cover"
              className="rounded-full float-left"
            />
          </div>
          <div className="flex justify-center md:justify-start space-x-2">
            <p className="self-center">{member.name}</p>
            <p>{member.linkedin && <LinkedinLogo link={member.linkedin} />}</p>
          </div>
          <p className="font-light italic text-gray-600">{member.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
