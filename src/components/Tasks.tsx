import styles from "./Tasks.module.css";
import Table from "../assets/Clipboard.svg";
export function Tasks() {
  return (
    <>
      <header className={styles.Info}>
        <strong className={styles.Added}>Tarefas Criadas 0</strong>
        <strong className={styles.End}>Concluídas 0</strong>
      </header>
      <main className={styles.Summary}>
        <img src={Table} />
        <strong>Voce ainda não tem tarefas cadrastradas</strong>
        <span>Crie Tarefas e organize seus itens a fazer</span>
      </main>
    </>
  );
}
