import { useState } from "react";
export default function App() {
  let id = 0;
  const initialStates = [
    { id: id++, label: "Walk the dog" },
    { id: id++, label: "Water the plants" },
    { id: id++, label: "Wash the dishes" },
  ];
  const [todos, setTodos] = useState(initialStates);
  const [task, setTask] = useState("");

  const submitButton = () => {
    setTodos((prev) => {
      const obj = { id: prev[prev.length - 1].id + 1, label: task };
      return [...prev, obj];
    });
    setTask("");
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          onChange={(event) => {
            setTask(event.target.value);
          }}
          type="text"
          value={task}
          placeholder="Add your task"
        />
        <div>
          <button onClick={submitButton}>Submit</button>
        </div>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <span key={todo.id}>
              <li >
                {todo.label}
                <button
                  onClick={() => {
                    setTodos(todos.filter((task) => task.id !== todo.id));
                  }}
                >
                  Delete
                </button>
              </li>
            </span>
          );
        })}
      </ul>
    </div>
  );
}
