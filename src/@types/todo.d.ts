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

export type TodoContextType = {
  dayList: IDay[];
  updateTodo: (date: string, id: string, value: boolean) => void;
};
