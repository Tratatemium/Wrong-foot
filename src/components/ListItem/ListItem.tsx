import { useState } from "react";

import { useTasks } from "../../context/TasksContext/useTasks";
import { Checkbox } from "../Checkbox/Checkbox";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";

import styles from "./ListItem.module.css";

function ListItem({ id }: { id: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState("");

  const { findTask, deleteTask, editTask, setCompleted } = useTasks();

  if (!findTask(id)) return null;

  const getText = () => findTask(id)?.text || "";
  const getChecked = () => findTask(id)?.completed || false;

  function handleEdit() {
    setDraft(getText());
    setIsEditing(true);
  }

  function handleSave() {
    editTask(id, draft);
    setIsEditing(false);
  }

  function handleCancel() {
    setDraft(getText());
    setIsEditing(false);
  }

  function handleDelete() {
    deleteTask(id);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    setCompleted(id, e.target.checked);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSave();
  }

  return (
    <li>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.taskWrapper}>
          <Checkbox checked={getChecked()} onChange={handleChange} />
          {!isEditing ? (
            <p className={styles.text}>{getText() || "Untitled task"}</p>
          ) : (
            <InputField
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
          )}
        </div>
        <div className={styles.buttonsWrapper}>
          {!isEditing ? (
            <>
              <Button variant="neutral" type="button" onClick={handleEdit}>
                Edit
              </Button>
              <Button variant="subtle" type="button" onClick={handleDelete}>
                Delete
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="default"
                type="button"
                onClick={handleSave}
                disabled={!draft.trim()}
              >
                Save
              </Button>
              <Button variant="subtle" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          )}
        </div>
      </form>
    </li>
  );
}

export { ListItem };
