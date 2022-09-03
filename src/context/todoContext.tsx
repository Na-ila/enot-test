import React, { ReactNode } from 'react';
import { TodoContextType, IDay } from '../@types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

interface Props {
  children?: ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [dayList, setDayList] = React.useState<IDay[]>([
    {
      date: '2022-09-03',
      tasks: [
        {
          id: '1',
          title: 'todo 1',
          text: 'jnv dsv f',
          done: false,
          color: '#366EFF',
        },
        {
          id: '2',
          title: 'todo 2',
          text: 'jnv dsv f',
          done: false,
          color: '#FF0000',
        },
      ],
    },
    {
      date: '2022-09-04',
      tasks: [
        {
          id: '1',
          title: 'todo 1',
          text: 'jnv dsv f',
          done: false,
          color: '#FFEB33',
        },
        {
          id: '2',
          title: 'todo 2',
          text: 'jnv dsv f',
          done: false,
          color: '#FF0000',
        },
        {
          id: '3',
          title: 'todo 3',
          text: 'jnv dsv f',
          done: false,
          color: '#FFEB33',
        },
        {
          id: '4',
          title: 'todo 4',
          text: 'jnv dsv f',
          done: false,
          color: '#366EFF',
        },
        {
          id: '5',
          title: 'todo 5',
          text: 'jnv dsv f',
          done: false,
          color: '#FF0000',
        },
      ],
    },
    {
      date: '2022-09-05',
      tasks: [
        {
          id: '1',
          title: 'todo 1',
          text: 'jnv dsv f',
          done: false,
          color: '#366EFF',
        },
        {
          id: '2',
          title: 'todo 2',
          text: 'jnv dsv f',
          done: false,
          color: '#FF0000',
        },
        {
          id: '3',
          title: 'todo 3',
          text: 'jnv dsv f',
          done: false,
          color: '#366EFF',
        },
        {
          id: '4',
          title: 'todo 4',
          text: 'jnv dsv f',
          done: false,
          color: '#FFEB33',
        },
      ],
    },
  ]);
  return (
    <TodoContext.Provider value={{ dayList }}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
