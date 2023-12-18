import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

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
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
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
