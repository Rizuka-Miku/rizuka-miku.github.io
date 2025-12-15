import { useState, ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
    slidesLength: number;
    children: ReactNode;
  }

const CustomSlider = ({ slidesLength, children }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const calculateThumbPosition = () => (activeIndex / (slidesLength - 1)) * 100;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    appendDots: () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="w-1/5 h-2 bg-[#A1326F] rounded overflow-hidden my-2">
          <div
            className="h-full bg-slate-200 rounded transition-all duration-500 ease-in-out"
            style={{
              width: `100%`,
              transform: `translateX(${calculateThumbPosition()}%)`,
            }}
          />
        </div>
      </div>
    ),
    arrows: false,
    adaptiveHeight: true,
    swipe: false,
    touchMove: false,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
