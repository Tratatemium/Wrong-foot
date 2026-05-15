import styles from "./Checkbox.module.css";

function Checkbox({
  type = "checkbox",
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <span className={styles.wrapper}>
      <input
        className={`${styles.input} ${className ?? ""}`}
        type={type}
        {...props}
      />
    </span>
  );
}

export { Checkbox };
