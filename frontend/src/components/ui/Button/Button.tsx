import type { ButtonHTMLAttributes } from "react";
import { cx } from "../../../utils/cx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "success";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(styles.button, styles[variant], className)}
      {...props}
    />
  );
}
