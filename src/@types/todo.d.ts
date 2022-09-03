export interface ITodo {
  id: string;
  title: string;
  text: string;
  done: boolean;
  color: string;
}

export interface IDay {
  date: string;
  tasks: ITodo[];
}

export type TodoContextType = {
  dayList: IDay[];
};
