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
        <img
          className="rounded-t-md"
          width="544px"
          height="272px"
          src="https://via.placeholder.com/544x272"
          alt="Placeholder"
        />
      </div>
      <div className="flex relative">
      <img
      className="rounded-t-md"
      width="544px"
      height="272px"
      src="https://via.placeholder.com/544x272"
      alt="Placeholder"
    />
      </div>
      <div className="flex relative">
      <img
      className="rounded-t-md"
      width="544px"
      height="272px"
      src="https://via.placeholder.com/544x272"
      alt="Placeholder"
    />
      </div>
    </Slider>
  )
}

export default SliderImage
