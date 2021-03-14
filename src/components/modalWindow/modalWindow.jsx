import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './modalWindow.scss';

const ModalWindow = ({
  isOpen,
  onRequestClose,
  children,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    ariaHideApp={false}
  >
    {children}
  </Modal>
);

const {
  bool,
  string,
  element,
  node,
  func,
  oneOfType,
} = PropTypes;

ModalWindow.propTypes = {
  children: oneOfType([string, element, node]).isRequired,
  isOpen: bool,
  onRequestClose: func,
};

export { ModalWindow };
