import { useState, useMemo } from "react";

import type { Task } from "./tasksContext";
import { TasksContext } from "./tasksContext";

function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask() {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: "",
        completed: false,
      },
    ]);
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  function editTask(id: string, text: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text } : task)),
    );
  }
  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      deleteTask,
      editTask,
      toggleTask,
    }),
    [tasks],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export { TasksProvider };
