export interface ITodo {
  id: string;
  title: string;
  text: string;
  done: boolean;
  color: string;
}

export interface IDay {
  date: string;
  todos: ITodo[];
}

interface IModalWindow {
  open: boolean;
  type: 'create' | 'delete' | '';
  date: string;
  id: string;
}

export type TodoContextType = {
  dayList: IDay[];
  updateTodo: (date: string, id: string, value: boolean) => void;
  deleteTodo: () => void;
  createTodo: (date: string | null, todo: ITodo) => void;
  showNews: boolean;
  updateShowNews: () => void;
  modalWindow: IModalWindow;
  updateModalInfo: (value: IModalWindow) => void;
};
