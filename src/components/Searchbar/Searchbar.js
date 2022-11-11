import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    imageString: '',
  };

  handleImageChange = event => {
    this.setState({ imageString: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageString.trim() === '') {
      alert('Заполните поле поиска');
    }

    this.props.onSubmit(this.state.imageString, this.state.isShown);
    this.setState({ imageString: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleImageChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
