import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from 'components/ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ array, toggleModal }) => {
  // console.log(this.props.imageString);
  return (
    <ul className={css.ImageGallery}>
      {array.map(({ id, smallFoto, largeFoto }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            smallFoto={smallFoto}
            largeFoto={largeFoto}
            onClickItem={() => toggleModal(largeFoto)}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      smallFoto: PropTypes.string.isRequired,
      largeFoto: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
