import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, smallFoto, largeFoto, onClickItem }) => {
  return (
    <li className={css.ImageGalleryItem} key={id} onClick={onClickItem}>
      <img src={smallFoto} alt="" className={css.ImageGalleryItem_image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallFoto: PropTypes.string.isRequired,
  largeFoto: PropTypes.string.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
