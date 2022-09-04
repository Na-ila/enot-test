import React from 'react';

import { TodoContext } from '../../../context/todoContext';
import { TodoContextType } from '../../../@types/todo';

import Button from '@mui/material/Button';

const Delete = () => {
  const { updateModalInfo, deleteTodo } = React.useContext(
    TodoContext
  ) as TodoContextType;

  const deleteTask = () => {
    deleteTodo();

    closeModal();
  };

  const closeModal = () => {
    updateModalInfo({
      open: false,
      type: '',
      date: '',
      id: '',
    });
  };

  return (
    <div>
      <h3>Are you sure you want to delete todo?</h3>
      <p>This action cannot be undone </p>
      <div className="modal_delete_btn_group">
        <Button variant="contained" onClick={deleteTask}>
          Delete
        </Button>
        <Button variant="contained" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Delete;
