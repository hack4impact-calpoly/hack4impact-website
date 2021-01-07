import {Container} from "react-bootstrap"
import styles from "../styles/CardMosaic.module.scss";

export const CardMosaic = ({ width, children }) => {
  let mosaicWidth;
  if (width === 3)
    mosaicWidth = styles.threeWide;
  else if (width === 4)
    mosaicWidth = styles.fourWide;
  else if (width === 5)
    mosaicWidth = styles.fiveWide;
  else
    return <h1>CardMosaic width={width} is not allowed</h1>;
  
  return (
    <>
      <Container className={styles.mosaic + ' ' + mosaicWidth} >
        { children }
      </Container>
      
    </>
  );
};
