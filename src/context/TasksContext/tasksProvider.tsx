import { useState, useMemo, useCallback, useEffect } from "react";

import type { Task } from "./tasksContext";
import { TasksContext } from "./tasksContext";

const TASKS_STORAGE_KEY = "tasks";

function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem(TASKS_STORAGE_KEY);
      return stored ? (JSON.parse(stored) as Task[]) : [];
    } catch {
      return [];
    }
  });

  const addTask = useCallback(() => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: "",
        completed: false,
      },
    ]);
  }, []);

  const findTask = useCallback(
    (id: string) => {
      return tasks.find((task) => task.id === id);
    },
    [tasks],
  );

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const editTask = useCallback((id: string, text: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text } : task)),
    );
  }, []);

  const setCompleted = useCallback((id: string, completed: boolean) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: completed } : task,
      ),
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      findTask,
      deleteTask,
      editTask,
      setCompleted,
    }),
    [tasks, addTask, findTask, deleteTask, editTask, setCompleted],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export { TasksProvider };
