import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ThreeDots } from 'react-loader-spinner';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from 'services/api';
import helper from 'Helper/Helper';
import Modal from './Modal/Modal';
import css from 'components/App.module.css';

class App extends Component {
  state = {
    isShown: false,
    isLoading: false,
    imageString: '',
    page: 1,
    imageList: [],
    showModal: false,
    bigImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImageString = prevState.imageString;
    const nextImageString = this.state.imageString;
    const { page } = this.state;
    if (prevImageString !== nextImageString) {
      console.log('изменился запрос');
      this.setState({ imageList: [] });
      this.getImages();
      this.setState({ loading: true });
    }
    if (prevState.page !== page) {
      this.getImages();
      this.setState({ loading: true });
    }
  }

  handleInputSubmit = imageString => {
    this.setState({ imageString });
  };

  getImages = () => {
    const { imageString, page } = this.state;

    this.setState({
      isLoading: true,
    });

    fetchImages(imageString, page)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          imageList: [...prevState.imageList, ...helper(data.hits)],
        }));
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
          isShown: true,
        });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isShown: true,
    }));
  };

  toggleModal = largeFoto => {
    this.setState(state => ({
      showModal: !state.showModal,
      bigImage: largeFoto,
    }));
  };

  render() {
    const { isShown, isLoading, showModal, imageList, bigImage } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleInputSubmit} />
        <ImageGallery array={imageList} toggleModal={this.toggleModal} />
        {isLoading && (
          <span className={css.ThreeDots}>
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="black"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </span>
        )}
        {isShown && <Button clickHandler={this.loadMore} />}
        {showModal && (
          <Modal onClickModal={this.toggleModal} largeFoto={bigImage} />
        )}
      </div>
    );
  }
}

export default App;
