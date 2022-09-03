import { useContext } from 'react';
import './todoBlock.scss';

import { TodoContext } from '../../context/todoContext';
import { TodoContextType } from '../../@types/todo';

import DayBlock from './DayBlock';

const ToDoBlock = () => {
  const { dayList } = useContext(TodoContext) as TodoContextType;

  return (
    <div className="todoBlock_container">
      {dayList.map((item) => (
        <DayBlock day={item} key={item.date} />
      ))}
    </div>
  );
};

export default ToDoBlock;
