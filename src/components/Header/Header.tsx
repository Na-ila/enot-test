import React from 'react';
import './header.scss';

import { TodoContext } from '../../context/todoContext';
import { TodoContextType } from '../../@types/todo';

import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header = () => {
  const { showNews, updateShowNews } = React.useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <div className="header_container">
      <h1>To Do</h1>
      <Tooltip title={showNews ? 'Скрыть новости' : 'Показать новости'}>
        <Switch
          {...label}
          defaultChecked
          onChange={updateShowNews}
          value={showNews}
        />
      </Tooltip>
    </div>
  );
};

export default Header;
