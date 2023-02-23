import Image from 'next/image'
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

const SliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    slidesToScroll: 1,
    nextArrow: <ChevronRightIcon/>,
    prevArrow: <ChevronLeftIcon/>
  };

  return (
    <Slider {...settings}>
      <div className="flex relative">
        <Image
          className="rounded-t-md"
          width={544}
          height={272}
          src="/images/image.png"
          alt="Placeholder"
        />
      </div>
      <div className="flex relative">
      <Image
        className="rounded-t-md"
        width={544}
        height={272}
        src="/images/image.png"
        alt="Placeholder"
      />
      </div>
      <div className="flex relative">
      <Image
        className="rounded-t-md"
        width={544}
        height={272}
        src="/images/image.png"
        alt="Placeholder"
    />
      </div>
    </Slider>
  )
}

export default SliderImage
