import { useState, useRef } from 'react';

import CardMosaic from './CardMosaic';
import SlideShow from './Slideshow';
import PageCard from './PageCard';

import { GoX } from 'react-icons/go';
import { Container } from 'react-bootstrap';
import styles from "../styles/PhotoGallery.module.scss";

const Thumbnail = (props) => (
  <img
    className={styles.thumbnail}
    src={props.photo.url}
    alt={props.photo.description}
    onClick={props.toggle}
  />
);

const PhotoGallery = (props) => {
  const popoutBkg = useRef(null);
  const xRef = useRef(null);
  const [isPopout, togglePopout] = useState(false);
  const [slide, setSlide] = useState(0);

  const openPopout = (i) => {
    setSlide(i);
    togglePopout(true);
  };

  const closePopout = (e) => {
    if (e.target === popoutBkg.current || xRef.current.contains(e.target)) {
      togglePopout(false);
    }
  }

  const photos = props.photos.map((photo, i) => (
    <Thumbnail
      key={i}
      photo={photo}
      toggle={() => openPopout(i)}
    />
  ));

  return (
    <>
      <div className={styles.gallery}>
        {photos}
      </div>

      {isPopout &&
        <div
          className={styles.popoutBackground}
          onClick={(e) => closePopout(e)}
          ref={popoutBkg}
        >
          <div className={styles.x} ref={xRef}>
            <GoX size={'1.4em'} />
          </div>
          <Container>
            <PageCard>
              <SlideShow images={props.photos} jumpTo={slide} />
            </PageCard>
          </Container>
        </div>
      }
    </>
  )
}

export default PhotoGallery;
