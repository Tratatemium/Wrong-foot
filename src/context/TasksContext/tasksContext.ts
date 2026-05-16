import { createContext } from "react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

type TasksContextType = {
  tasks: Task[];
  addTask: () => void;
  findTask: (id: string) => Task | undefined;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string) => void;
  setCompleted: (id: string, completed: boolean) => void;
};

const TasksContext = createContext<TasksContextType | null>(null);

export type { Task, TasksContextType };
export { TasksContext };
