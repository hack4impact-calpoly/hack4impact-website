import React from 'react';
import { TestimonalProps } from '../utils/types';
import LinkedinLogo from './LinkedinLogo';

const Testimonial = (props: TestimonalProps) => {
  const { member, quote } = props;

  return (
    <div className="flex bg-white filter drop-shadow-md rounded-md mb-4">
      <div className="hidden md:flex flex-grow w-1/3">
        <img
          src={member.headshot.url.toString()}
          alt=""
          width="600"
          height="590"
          className="h-100 rounded-l-md object-cover"
        />
      </div>

      <div className="md:w-2/3 px-6 py-6 md:px-12 md:py-8 space-y-4 flex flex-col justify-center">
        <p>{`"${quote}"`}</p>
        <div className="sm:flex sm:justify-center sm:align-middle md:justify-start space-y-0">
          <img
            src={member.headshot.url.toString()}
            alt=""
            width="100"
            height="100"
            className="rounded-full object-cover w-32 h-32 mx-auto mt-2 mb-4 sm:ml-0 sm:mr-4 sm:w-24 sm:h-24 md:hidden"
          />
          <div className="sm:self-center">
            <div className="flex justify-center sm:justify-start space-x-2">
              <p className="self-center">{member.name}</p>
              <p>{member.linkedin && <LinkedinLogo link={member.linkedin} />}</p>
            </div>
            <p className="text-center font-light italic text-gray-600 md:text-left">{member.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
