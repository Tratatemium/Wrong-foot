import styles from './App.module.css'
import { Button } from './components/Button/Button'
function App() {


  return (
    <div className={styles.app}>
      <Button variant = "neutral" text = "Edit"></Button>
      <Button variant = "default" text = "Add task"></Button>
      <Button variant = "subtle" text = "Delete"></Button>
    </div>
  )
}

export default App
