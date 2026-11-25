import styles from "./EmptyState.module.css";

export function EmptyState({
  title = "Brak graczy",
  message = "Zmień filtry, aby zobaczyć więcej osób.",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className={styles.empty}>
      <span>0</span>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
