import Slider from "react-slick";

const SliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    dots: false,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <img
        className="w-full h-60 object-cover rounded-t-md"
        width="544px"
        height="272px"
        src="https://via.placeholder.com/544x272"
        alt="Placeholder"
      />
      <img
      className="w-full h-60 object-cover rounded-t-md"
      width="544px"
      height="272px"
      src="https://via.placeholder.com/544x272"
      alt="Placeholder"
    />
    </Slider>
  )
}

export default SliderImage
