import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import './header.scss';
// import { addMovieForm } from '../../mocked';
import { Button } from '../../components/button';
import { Heading } from '../../components/heading';
import { ModalWindow } from '../../components/modalWindow';
import { ActionMovieCard } from '../../components/actionMovieCard';

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
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
          variant="action"
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
          handleSubmit={closeModal}
          handleCancel={closeModal}
          submitBtnText="submit"
          cancelBtnText="reset"
        />
      </ModalWindow>
    </>
  );
};

export { Header };
