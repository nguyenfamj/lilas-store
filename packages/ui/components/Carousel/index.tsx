'use client';
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrow';
import { CarouselDot, useDotButton } from './CarouselDot';
import UIHelpers from '../../utils/UIHelper';

type Props = {
  options: EmblaOptionsType;
  children: React.ReactNode;
};

export default function Carousel({ options, children }: Props) {
  const [carouselRef, carouselApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(carouselApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(carouselApi);

  return (
    <div className='relative overflow-hidden' ref={carouselRef}>
      <div className='flex touch-pan-y'>{children}</div>

      {/* Chevron buttons */}
      <div className='absolute flex justify-between w-full px-2 -translate-y-1/2 top-1/2'>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      {/* Dot navigation */}
      <div className='absolute left-0 right-0 flex items-center justify-center bottom-4'>
        {scrollSnaps.map((_, index) => (
          <CarouselDot
            key={index}
            className={UIHelpers.conditionalClassNames(
              index === selectedIndex ? 'bg-white' : 'bg-slate-400',
              'flex items-center w-6 h-1 ml-2 mr-2 rounded-lg',
            )}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
