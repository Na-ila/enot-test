import React, { ReactNode } from 'react';
import { TodoContextType, IDay, ITodo } from '../@types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

interface Props {
  children?: ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [dayList, setDayList] = React.useState<IDay[]>([
    {
      date: '2022-09-03',
      todos: [
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
      todos: [
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
      todos: [
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
  const updateTodo = (date: string, id: string, value: boolean) => {
    dayList.forEach((day: IDay, dayIndex: number) => {
      if (day.date === date) {
        day.todos.forEach((todo: ITodo, todoIndex: number) => {
          if (todo.id === id) {
            const updatedTodo = {
              ...todo,
              done: value,
            };
            const updatedDay = {
              ...day,
              todos: [
                ...day.todos.slice(0, todoIndex),
                updatedTodo,
                ...day.todos.slice(todoIndex + 1),
              ],
            };

            setDayList((prev) => [
              ...prev.slice(0, dayIndex),
              updatedDay,
              ...prev.slice(dayIndex + 1),
            ]);
          }
        });
      }
    });
  };
  return (
    <TodoContext.Provider value={{ dayList, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
