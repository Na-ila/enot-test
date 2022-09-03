import './todoBlock.scss';

import DayBlock from './DayBlock';

const dayArr = [
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
];

const ToDoBlock = () => {
  return (
    <div className="todoBlock_container">
      {dayArr.map((item) => (
        <DayBlock day={item} key={item.date} />
      ))}
    </div>
  );
};

export default ToDoBlock;
