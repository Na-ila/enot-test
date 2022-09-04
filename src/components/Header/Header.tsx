import React from 'react';
import './header.scss';

import { TodoContext } from '../../context/todoContext';
import { TodoContextType } from '../../@types/todo';

import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header = () => {
  const { showNews, updateShowNews, updateModalInfo } = React.useContext(
    TodoContext
  ) as TodoContextType;

  const createTodo = () => {
    updateModalInfo({
      open: true,
      type: 'create',
      date: '',
      id: '',
    });
  };

  return (
    <div className="header_container">
      <h1>To Do</h1>
      <div>
        <Tooltip title={showNews ? 'Hide news' : 'Show news'}>
          <Switch
            {...label}
            onChange={updateShowNews}
            value={showNews}
            checked={showNews}
          />
        </Tooltip>
        <Tooltip title={'Add todo'}>
          <IconButton onClick={createTodo}>
            <AddIcon style={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
