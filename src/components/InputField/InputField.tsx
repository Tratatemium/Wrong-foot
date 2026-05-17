import styles from "./InputField.module.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "title";
}

function InputField({
  type = "text",
  variant = "default",
  className,
  ...props
}: InputFieldProps) {
  return (
    <input
      className={`${styles.input} ${styles[variant]} ${className ?? ""}`}
      type={type}
      {...props}
    />
  );
}

export { InputField };
