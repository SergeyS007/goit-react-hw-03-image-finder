import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css';

class Modal extends Component {
  static propTypes = {
    onClickModal: PropTypes.func.isRequired,
    largeFoto: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEscape);
  }
  onCloseByEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClickModal();
    }
  };
  onClosebyBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClickModal();
    }
  };

  render() {
    const { largeFoto } = this.props;
    return (
      <div className={css.Overlay} onClick={this.onClosebyBackdrop}>
        <div className={css.Modal}>
          <img src={largeFoto} alt="" width="800"></img>
        </div>
      </div>
    );
  }
}

export default Modal;
