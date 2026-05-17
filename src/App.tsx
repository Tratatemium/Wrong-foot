import styles from "./App.module.css";

import { TasksProvider } from "./context/TasksContext/tasksProvider";
import { Checklist } from "./components/Checklist/Checklist";
function App() {
  return (
    <TasksProvider>
      <main className={styles.main}>
        <Checklist />
      </main>
    </TasksProvider>
  );
}

export default App;
