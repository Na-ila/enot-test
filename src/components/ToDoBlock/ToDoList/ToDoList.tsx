import React from 'react';
import './todoItem.scss';
import { IDay, ITodo, TodoContextType } from '../../../@types/todo';

import { TodoContext } from '../../../context/todoContext';

import cross from '../../../assets/cross.svg';
import done from '../../../assets/done.svg';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${done})`,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${cross})`,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#366EFF',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const style = {
  borderRadius: '25px',
  width: '329px',
  padding: '13px 18px',
};

interface IToDoItemProps {
  date: string;
  todo: ITodo;
}

interface IToDoListProps {
  day: IDay;
}

const ToDoItem = ({ date, todo }: IToDoItemProps) => {
  const { dayList, updateTodo } = React.useContext(
    TodoContext
  ) as TodoContextType;

  const isChecked = dayList
    .filter((day) => day.date === date)[0]
    .todos.filter((td) => td.id === todo.id)[0].done;

  return (
    <div className="todo_item_container">
      <div className="todo_item_left">
        <div className="color_stick" style={{ background: todo.color }}></div>
        <div>
          <p
            className="todo_title"
            style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
          >
            {todo.title}
          </p>
          <p className="todo_text">{todo.text}</p>
        </div>
      </div>
      <IOSSwitch
        sx={{ m: 1 }}
        checked={isChecked}
        onChange={(e) => updateTodo(date, todo.id, e.target.checked)}
      />
    </div>
  );
};

export const TodoListContent = ({ day }: IToDoListProps) => {
  return (
    <div className="todo_list_container">
      {day.todos.map((todo) => (
        <ToDoItem todo={todo} key={todo.id} date={day.date} />
      ))}
    </div>
  );
};

const ToDoList = ({ day }: IToDoListProps) => {
  return (
    <Paper style={style}>
      <TodoListContent day={day} />
    </Paper>
  );
};

export default ToDoList;
