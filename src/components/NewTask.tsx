import { InvalidEvent } from "react";
import styles from "./NewTask.module.css";
import Plus from "../assets/plus.svg";
function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity("Este campo é obrigatório");
}

//function handleCreateNewTask(event: FormEvent) {
//event.preventDefault();
//setTaks([...Tasks, newTaskText]);
//setNewCommentText("");

// const isNewTaskEmpty = newTaskText.trim().length === 0;
export function NewTask() {
  return (
    // onSubmit={handleNewTask}
    //onChange={}
    <form className={styles.Form}>
      <textarea
        className={styles.TextArea}
        name="New Task"
        placeholder="Adicione uma nova tarefa !"
        onInvalid={handleNewTaskInvalid}
        //value={newTaskText}
        //onChange={handleNewTaskChange}
        required
      ></textarea>
      <button
        type="submit"
        // disabled={isNewTaskEmpty}
      >
        Criar <img src={Plus}></img>
      </button>
    </form>
  );
}
