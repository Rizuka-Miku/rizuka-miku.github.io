import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  children: React.ReactNode
}

const MobileCarousel = ({ children }: Props) => {
  const items = React.Children.toArray(children)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (items.length === 0) return null

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    touchMove: true,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
    centerMode: true,
    centerPadding: '7vw',
  }

  return (
    <div className="flex flex-col gap-3">
      <Slider {...settings}>
        {items.map((child, i) => (
          <div key={i} className="px-2">
            {child}
          </div>
        ))}
      </Slider>
      <div className="flex justify-center gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#A1326F] w-4' : 'bg-gray-300 dark:bg-gray-600 w-2'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default MobileCarousel
