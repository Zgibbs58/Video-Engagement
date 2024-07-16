import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div className="my-5">
        <h3 className="text-2xl font-bold">AstronoME</h3>
        <img src="/images/AstronoME-screenshot.PNG" alt="" />
        <p>A full stack application that allows stargazers to create community.</p>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
