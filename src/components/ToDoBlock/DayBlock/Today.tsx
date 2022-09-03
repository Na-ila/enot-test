import './dayBlock.scss';
import { IDay } from '../../../@types/todo';

import ToDoList from '../ToDoList';

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface ITodayProps {
  data: IDay;
}

const Today = ({ data }: ITodayProps) => {
  return (
    <div className="today_container">
      <div className="today_title">
        <Checkbox {...label} defaultChecked style={{ color: 'white' }} />
        <div className="day_title">Today tasks:</div>
      </div>
      <ToDoList todo={data} />
    </div>
  );
};

export default Today;
