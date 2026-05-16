import styles from "./App.module.css";

import { TasksProvider } from "./context/TasksContext/tasksProvider";
import { Button } from "./components/Button/Button";
function App() {
  return (
    <TasksProvider>
      <div className={styles.app}>
        <Button variant="neutral">Edit</Button>
        <Button variant="default">Add task</Button>
        <Button variant="subtle">Delete</Button>
      </div>
    </TasksProvider>
  );
}

export default App;
