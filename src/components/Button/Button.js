import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css';

const Button = ({ clickHandler }) => {
  return (
    <button type="button" onClick={clickHandler} className={css.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
