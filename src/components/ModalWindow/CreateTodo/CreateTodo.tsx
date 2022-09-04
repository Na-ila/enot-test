import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoContext } from '../../../context/todoContext';
import { TodoContextType } from '../../../@types/todo';
import { getRandomColor } from '../../../App/utils';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const textAreaStyle = {
  '& .MuiInputLabel-root': { color: 'white !important' }, //styles the label
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      borderColor: 'white',
      color: 'white !important',
    },
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& > fieldset': {
      borderColor: 'white',
      color: 'white !important',
    },
  },
  '& .MuiOutlinedInput-root:hover': {
    '& > fieldset': {
      borderColor: 'white !important',
    },
  },
};

export const inputProps = { style: { color: 'white' } };

const CreateTodo = () => {
  const { updateModalInfo, createTodo } = React.useContext(
    TodoContext
  ) as TodoContextType;

  const [title, setTitle] = React.useState<string>('');
  const [text, setText] = React.useState<string>('');
  const [titleError, setTitleError] = React.useState<boolean>(false);
  const [textError, setTextError] = React.useState<boolean>(false);
  const [date, setDate] = React.useState<string | null>(new Date().toString());

  const createTask = () => {
    if (!title) {
      setTitleError(true);
    } else if (!text) {
      setTextError(true);
    } else {
      const todo = {
        id: uuidv4(),
        title: title,
        text: text,
        done: false,
        color: getRandomColor(),
      };

      let d = new Date(date ?? '').toISOString().slice(0, 10);
      createTodo(d && d.replaceAll('.', '-'), todo);

      updateModalInfo({
        open: false,
        type: '',
        date: '',
        id: '',
      });
    }
  };

  return (
    <div className="create_todo">
      <TextField
        id="outlined-basicc"
        label="Title"
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => {
          setTitleError(false);
          setTitle(e.target.value);
        }}
        error={titleError}
        inputProps={inputProps}
        sx={{
          ...textAreaStyle,
        }}
      />
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ruLocale}
      >
        <DatePicker
          label="Date"
          inputFormat="dd/MM/yyyy"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              inputProps={inputProps}
              sx={{
                ...textAreaStyle,
                input: { color: 'white' },
                svg: { color: 'white' },
              }}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
      <TextField
        id="outlined-basic"
        label="Text"
        variant="outlined"
        size="small"
        value={text}
        onChange={(e) => {
          setTextError(false);
          setText(e.target.value);
        }}
        error={textError}
        inputProps={inputProps}
        sx={{
          ...textAreaStyle,
        }}
        multiline
        minRows={3}
      />
      <Button variant="contained" onClick={createTask}>
        Create
      </Button>
    </div>
  );
};

export default CreateTodo;
