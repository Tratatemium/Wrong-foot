import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { useTasks } from "../../context/TasksContext/useTasks";
import { Title } from "../Title/Title";

import styles from "./Checklist.module.css";

function Checklist() {
  const { tasks, addTask } = useTasks();

  function getInfo() {
    if (tasks.length === 0) return "No tasks yet";
    const completed = tasks.reduce(
      (acc, task) => (task.completed ? ++acc : acc),
      0,
    );
    if (completed === tasks.length) return "All tasks completed";
    return `${tasks.length - completed} tasks remaining`;
  }

  return (
    <div className={styles.checklist}>
      <header className={styles.header}>
        <svg
          className={styles.icon}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8333 20.1667V14.8333M14.8333 9.5H14.8467M28.1667 14.8333C28.1667 22.1971 22.1971 28.1667 14.8333 28.1667C7.46954 28.1667 1.5 22.1971 1.5 14.8333C1.5 7.46954 7.46954 1.5 14.8333 1.5C22.1971 1.5 28.1667 7.46954 28.1667 14.8333Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={styles.headerText}>
          <Title />
          <p className={styles.info}>{getInfo()}</p>
        </div>
      </header>
      {tasks.length > 0 && <Card />}
      <Button variant="default" onClick={addTask} className={styles.addButton}>
        Add task
      </Button>
    </div>
  );
}

export { Checklist };
