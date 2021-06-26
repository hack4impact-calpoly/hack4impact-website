import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

import style from '../styles/Slideshow.module.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = (props) => (
  <figure className={style.slideHolder}>
    <img
      src={props.image.url}
      width='800'
      height='500'
      className={style.slide}
    />
    <figcaption className={style.caption}>{ props.image.description }</figcaption>
  </figure>
);

const Slideshow = (props) => {
  const images = props.images.map((img, i) => (
    <Slide key={i} image={img} />
  ));

  if (props.autoplay) {
    settings.autoplay = true;
    settings.autoplaySpeed = 4000;
    settings.pauseOnHover = true;
  }

  return (
    <div className={style.holder}>
      <Slider initialSlide={props.jumpTo || 0} {...settings} >{ images }</Slider>
    </div>
  );
};

export default Slideshow;
