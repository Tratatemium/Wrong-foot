import { useState } from "react";

import { Button } from "../Button/Button";
import { EditIcon } from "../icons/EditIcon";
import { InputField } from "../InputField/InputField";

import styles from "./Title.module.css";

const TITLE_STORAGE_KEY = "checklist-title";

function Title() {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(
    () => localStorage.getItem(TITLE_STORAGE_KEY) ?? "My Checklist",
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem(TITLE_STORAGE_KEY, value);
    setIsEditing(false);
  }

  return (
    <form className={styles.titleWrapper} onSubmit={handleSubmit}>
      {!isEditing ? (
        <h2 className={styles.title}>{value}</h2>
      ) : (
        <InputField
          autoFocus
          variant="title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <Button
        variant="subtle"
        type="button"
        onClick={() => {
          if (isEditing) localStorage.setItem(TITLE_STORAGE_KEY, value);
          setIsEditing((prev) => !prev);
        }}
      >
        <EditIcon />
      </Button>
    </form>
  );
}

export { Title };
