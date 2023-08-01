import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel = (props: CarouselProps) => {
  const { children } = props;
  const [slideIndex, setSlideIndex] = useState(0);

  function updateIndex(direction: number) {
    if (slideIndex + direction < 0) setSlideIndex(children.length - 1);
    else if (slideIndex + direction === children.length) setSlideIndex(0);
    else setSlideIndex(slideIndex + direction);
  }

  return (
    <div className="flex justify-between">
      <div className="hidden md:block my-auto w-16 h-16 rounded-full text-blue">
        <ChevronLeftIcon className="h-16 w-12 cursor-pointer mx-auto" onClick={() => updateIndex(-1)} />
      </div>
      <div className="md:w-4/5">
        {children[slideIndex]}
        <div className="flex justify-center space-x-2 mt-2">
          <div className="md:hidden my-auto w-8 h-8 rounded-full text-blue">
            <ChevronLeftIcon className="h-8 w-6 cursor-pointer mx-auto" onClick={() => updateIndex(-1)} />
          </div>
          {children.map((_, i) => {
            const outlineCircle = 'w-4 h-4 mt-3 border-2 border-blue rounded-full cursor-pointer self-center';
            const circle = i === slideIndex ? `${outlineCircle} bg-blue` : outlineCircle;
            // eslint-disable-next-line react/no-array-index-key
            return <div key={i} className={circle} onClick={() => setSlideIndex(i)} aria-hidden="true">&nbsp;</div>;
          })}
          <div className="md:hidden my-auto w-8 h-8 rounded-full text-blue">
            <ChevronRightIcon className="h-8 w-6 cursor-pointer mx-auto" onClick={() => updateIndex(1)} />
          </div>
        </div>
      </div>
      <div className="hidden md:block my-auto w-16 h-16 rounded-full text-blue">
        <ChevronRightIcon className="h-16 w-12 cursor-pointer mx-auto" onClick={() => updateIndex(1)} />
      </div>
    </div>
  );
};

export default Carousel;
