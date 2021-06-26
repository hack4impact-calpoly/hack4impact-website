import styles from "../styles/CardMosaic.module.scss";

const CardMosaic = ({ width, size, children }) => {
  let mosaicWidth;
  switch (width) {
    case 2:
      mosaicWidth = styles.twoWide;
      break;
    case 3:
      mosaicWidth = styles.threeWide;
      break;
    case 4:
      mosaicWidth = styles.fourWide;
      break;
    case 5:
      mosaicWidth = styles.fiveWide;
      break;
    case 6:
      mosaicWidth = styles.sixWide;
      break;
    default:
      return <h1>CardMosaic width={width} is not allowed</h1>;
  }

  const cardSize = size === "large" ? styles.large : null;

  return (
    <div className={mosaicWidth + ' ' + cardSize}>
      { children }
    </div>
  );
};

export default CardMosaic;
