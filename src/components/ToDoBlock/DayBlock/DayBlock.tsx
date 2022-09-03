import { IDay } from '../../../@types/todo';
import NotToday from './NotToday';
import Today from './Today';

import { createTheme, ThemeProvider } from '@mui/material/styles';

interface IDayBlockProps {
  day: IDay;
}

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const DayBlock = ({ day }: IDayBlockProps) => {
  const daysDiff =
    new Date(day.date).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0);

  return (
    <ThemeProvider theme={darkTheme}>
      {daysDiff === 0 ? (
        <Today day={day} />
      ) : (
        <NotToday day={day} daysDiff={daysDiff} />
      )}
    </ThemeProvider>
  );
};

export default DayBlock;
