import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoContextType, IDay, ITodo, IModalWindow } from '../@types/todo';
import { dates } from '../App/utils';

export const TodoContext = React.createContext<TodoContextType | null>(null);

interface Props {
  children?: ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [dayList, setDayList] = React.useState<IDay[]>([
    {
      date: dates()[0],
      todos: [
        {
          id: uuidv4(),
          title: 'Магазин',
          text: 'Сходить за продуктами',
          done: false,
          color: '#366EFF',
        },
        {
          id: uuidv4(),
          title: 'Английский',
          text: 'Выучить слова',
          done: false,
          color: '#FF0000',
        },
      ],
    },
    {
      date: dates()[1],
      todos: [
        {
          id: uuidv4(),
          title: 'Работа',
          text: 'Закрыть задачу №2352',
          done: false,
          color: '#FFEB33',
        },
        {
          id: uuidv4(),
          title: 'Английский',
          text: 'Сделать перевод',
          done: false,
          color: '#FF0000',
        },
        {
          id: uuidv4(),
          title: 'Ужин',
          text: 'Приготовить лазанью',
          done: false,
          color: '#FFEB33',
        },
        {
          id: uuidv4(),
          title: 'Ветеринарка',
          text: 'Отвезти кота',
          done: false,
          color: '#366EFF',
        },
        {
          id: uuidv4(),
          title: 'Книга',
          text: 'Прочитать 20 страниц',
          done: false,
          color: '#FF0000',
        },
      ],
    },
    {
      date: dates()[2],
      todos: [
        {
          id: uuidv4(),
          title: 'Зарядка',
          text: '8:30 сделать зарядку',
          done: false,
          color: '#366EFF',
        },
        {
          id: uuidv4(),
          title: 'Посылка',
          text: 'Позвонить на почту',
          done: false,
          color: '#FF0000',
        },
        {
          id: uuidv4(),
          title: 'Книга',
          text: 'Прочитать 20 страниц',
          done: false,
          color: '#366EFF',
        },
        {
          id: uuidv4(),
          title: 'Сходить в гости',
          text: 'Навестить бабушку',
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
  const deleteTodo = () => {
    dayList.forEach((day: IDay, dayIndex: number) => {
      if (day.date === modalWindow.date) {
        day.todos.forEach((todo: ITodo, todoIndex: number) => {
          if (todo.id === modalWindow.id) {
            if (day.todos.length === 1) {
              setDayList((prev) => [
                ...prev.slice(0, dayIndex),
                ...prev.slice(dayIndex + 1),
              ]);
            } else {
              const updatedDay = {
                ...day,
                todos: [
                  ...day.todos.slice(0, todoIndex),
                  ...day.todos.slice(todoIndex + 1),
                ],
              };

              setDayList((prev) => [
                ...prev.slice(0, dayIndex),
                updatedDay,
                ...prev.slice(dayIndex + 1),
              ]);
            }
          }
        });
      }
    });
  };
  const createTodo = (date: string | null, todo: ITodo) => {
    const index = dayList.findIndex((item) => item.date === date);

    if (index !== -1) {
      dayList.forEach((day: IDay, dayIndex: number) => {
        if (day.date === date) {
          const updatedDay = {
            ...day,
            todos: [todo, ...day.todos],
          };
          setDayList((prev) => [
            ...prev.slice(0, dayIndex),
            updatedDay,
            ...prev.slice(dayIndex + 1),
          ]);
        }
      });
    } else {
      let idx: number = dayList.length;

      const newDay: IDay = {
        date: date ?? '',
        todos: [todo],
      };

      for (let i = 0; i < dayList.length; i++) {
        if (
          new Date(dayList[i].date).getTime() > new Date(date ?? '').getTime()
        ) {
          idx = i;
          break;
        }
      }

      setDayList((prev) => {
        return [...prev.slice(0, idx), newDay, ...prev.slice(idx)];
      });
    }
  };
  const [showNews, setShowNews] = React.useState(true);
  const updateShowNews = () => {
    setShowNews((prev) => !prev);
  };
  const [modalWindow, setModalWindow] = React.useState<IModalWindow>({
    open: false,
    type: '',
    date: '',
    id: '',
  });
  const updateModalInfo = (value: IModalWindow) => {
    setModalWindow(value);
  };
  return (
    <TodoContext.Provider
      value={{
        dayList,
        updateTodo,
        deleteTodo,
        createTodo,
        showNews,
        updateShowNews,
        modalWindow,
        updateModalInfo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
