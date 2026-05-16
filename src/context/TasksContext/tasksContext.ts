import { createContext } from "react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

type TasksContextType = {
  tasks: Task[];
  addTask: () => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string) => void;
  toggleTask: (id: string) => void;
};

const TasksContext = createContext<TasksContextType | null>(null);

export type { Task, TasksContextType };
export { TasksContext };
