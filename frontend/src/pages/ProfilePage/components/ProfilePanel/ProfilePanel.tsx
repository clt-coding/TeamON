import type { ReactNode } from "react";
import { cx } from "../../../../utils/cx";
import styles from "./ProfilePanel.module.css";

export interface ProfilePanelProps {
  kicker: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function ProfilePanel({ kicker, title, children, className }: ProfilePanelProps) {
  return (
    <section className={cx(styles.panel, className)} aria-label={title}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
