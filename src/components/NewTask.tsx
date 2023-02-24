import { InvalidEvent } from "react";
import styles from "./NewTask.module.css";

function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity("Este campo é obrigatório");
}
// const isNewCommentEmpty = newTaskText.trim().length === 0;
export function NewTask() {
  return (
    // onSubmit={handleNewTask}
    //onChange={}
    <form className={styles.Form}>
      <textarea
        className={styles.TextArea}
        name="New Task"
        placeholder="Adicione uma nova tarefa!"
        onInvalid={handleNewTaskInvalid}
        required
      ></textarea>
      <button
        type="submit"
        // disabled={isNewTaskEmpty}
      >
        Criar
      </button>
    </form>
  );
}
