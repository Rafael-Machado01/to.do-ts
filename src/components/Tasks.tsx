import styles from "./Tasks.module.css";
export function Tasks() {
  return (
    <header className={styles.Info}>
      <strong className={styles.Added}>Tarefas Criadas 0</strong>
      <strong className={styles.End}>Concluídas 0</strong>
    </header>
  );
}
