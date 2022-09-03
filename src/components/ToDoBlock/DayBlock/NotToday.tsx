import * as React from 'react';
import './dayBlock.scss';
import { IDay } from '../../../@types/todo';

import { TodoListContent } from '../ToDoList/ToDoList';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
  maxWidth: 345,
  width: 345,
  borderRadius: '25px',
  p: '5px 10px',
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface INotTodayProps {
  data: IDay;
  daysDiff: number;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  padding: 0,
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const NotToday = ({ data, daysDiff }: INotTodayProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const title =
    daysDiff === 1
      ? 'Tomorrow'
      : data.date.slice(8) + '/' + data.date.slice(5, 7);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={style}>
      <CardActions disableSpacing className="card_actions">
        <div className="color_stick" style={{ background: 'white' }}></div>
        <div className="day_title">{title} Tasks</div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TodoListContent todo={data} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default NotToday;
