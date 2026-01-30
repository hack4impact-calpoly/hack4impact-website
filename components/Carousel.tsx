import React, { useState, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel = (props: CarouselProps) => {
  const { children } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateIndex = useCallback((direction: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (slideIndex + direction < 0) setSlideIndex(children.length - 1);
    else if (slideIndex + direction === children.length) setSlideIndex(0);
    else setSlideIndex(slideIndex + direction);

    setTimeout(() => setIsTransitioning(false), 300);
  }, [slideIndex, children.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === slideIndex) return;

    setIsTransitioning(true);
    setSlideIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slideIndex]);

  const arrowButtonClass = 'cursor-pointer mx-auto transition-all duration-200 hover:scale-110 hover:text-blue-light';

  return (
    <div className="flex justify-between">
      <div className="hidden md:block my-auto w-16 h-16 rounded-full text-blue">
        <ChevronLeftIcon
          className={`h-16 w-12 ${arrowButtonClass}`}
          onClick={() => updateIndex(-1)}
        />
      </div>
      <div className="md:w-4/5">
        <div className={`transform-gpu transition-transform duration-300 ease-out motion-reduce:transition-none ${isTransitioning ? 'translate-y-1' : 'translate-y-0'}`}>
          {children[slideIndex]}
        </div>
        <div className="flex justify-center space-x-2 mt-2">
          <div className="md:hidden my-auto w-8 h-8 rounded-full text-blue">
            <ChevronLeftIcon
              className={`h-8 w-6 ${arrowButtonClass}`}
              onClick={() => updateIndex(-1)}
            />
          </div>
          {children.map((_, i) => {
            const baseCircle = 'w-4 h-4 mt-3 border-2 border-blue rounded-full cursor-pointer self-center transition-all duration-200 hover:border-blue-light hover:scale-110';
            const circle = i === slideIndex ? `${baseCircle} bg-blue` : baseCircle;
            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className={circle}
                onClick={() => goToSlide(i)}
                aria-hidden="true"
              >
                &nbsp;
              </div>
            );
          })}
          <div className="md:hidden my-auto w-8 h-8 rounded-full text-blue">
            <ChevronRightIcon
              className={`h-8 w-6 ${arrowButtonClass}`}
              onClick={() => updateIndex(1)}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block my-auto w-16 h-16 rounded-full text-blue">
        <ChevronRightIcon
          className={`h-16 w-12 ${arrowButtonClass}`}
          onClick={() => updateIndex(1)}
        />
      </div>
    </div>
  );
};

export default Carousel;
