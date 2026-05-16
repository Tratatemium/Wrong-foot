import { ListItem } from "../ListItem/ListItem";

import { useTasks } from "../../context/TasksContext/useTasks";

import styles from "./Card.module.css";

function Card() {
  const { tasks } = useTasks();
  return (
    <ul className={styles.card}>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => <ListItem key={task.id} id={task.id} />)
      )}
    </ul>
  );
}

export { Card };
