import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import './header.scss';
import { addMovieItem } from '../../store/actions/movies';
import { Button } from '../../components/button';
import { Heading } from '../../components/heading';
import { ModalWindow } from '../../components/modalWindow';
import { ActionMovieCard } from '../../components/actionMovieCard';

const mapStateToProps = (state) => {
  const { movie } = state;
  return { movie };
};

const mapDispatchToProps = (dispatch) => ({
  addMovie: (params) => dispatch(addMovieItem(params)),
});

const Header = ({
  addMovie,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleAddMovie = async (movie) => {
    await addMovie(movie);
    closeModal();
  };

  return (
    <>
      <header className="header">
        <img
          src={logo}
          width="100"
          height="100"
          alt="logo"
        />
        <Button
          variant="secondary"
          onClick={openModal}
        >
          + Add movie
        </Button>
      </header>

      <ModalWindow
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button
          type="button"
          onClick={closeModal}
        >
          x
        </button>
        <Heading
          title="add movie"
          level="h1"
        />
        <ActionMovieCard
          form={{}}
          handleSubmit={handleAddMovie}
          handleCancel={closeModal}
          submitBtnText="submit"
          cancelBtnText="reset"
        />
      </ModalWindow>
    </>
  );
};

const {
  func,
} = PropTypes;

Header.propTypes = {
  addMovie: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
