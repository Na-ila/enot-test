import React from 'react';
import './modal.scss';

import { TodoContext } from '../../context/todoContext';
import { TodoContextType } from '../../@types/todo';

import Delete from './Delete';
import CreateTodo from './CreateTodo';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const ModalWindow = () => {
  const { modalWindow, updateModalInfo } = React.useContext(
    TodoContext
  ) as TodoContextType;

  const handleClose = () => {
    updateModalInfo({
      open: false,
      type: '',
      date: '',
      id: '',
    });
  };

  return (
    <Modal
      open={modalWindow.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <Box className="modal_container">
        {modalWindow.type === 'delete' ? (
          <Delete />
        ) : modalWindow.type === 'create' ? (
          <CreateTodo />
        ) : (
          <></>
        )}
      </Box>
    </Modal>
  );
};

export default ModalWindow;
