import React from 'react';
import './modal.scss';

import { TodoContext } from '../../context/todoContext';
import { TodoContextType } from '../../@types/todo';

import Delete from './Delete';
import CreateTodo from './CreateTodo';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#282828',
  color: '#f4f4f4',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '25px',
};

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
      <Box sx={style}>
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
