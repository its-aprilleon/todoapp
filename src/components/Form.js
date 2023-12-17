import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit} method="POST">
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter todo items..."
          />
          <button type="submit" className={styles.mordernButton}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
