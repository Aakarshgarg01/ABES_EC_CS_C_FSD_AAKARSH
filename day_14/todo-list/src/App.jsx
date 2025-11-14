import { useState } from "react"
import InputToDo from "./Components/InputToDo"

function App() {
  const [todoList, setTodoList] = useState([]);

  const inputHandler = (task) => {
    setTodoList([...todoList, task]);
  }

  const deleteHandler = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  }

  const updateHandler = (index, data) => {
    const updatedTask = prompt("Update the task:", data);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      const newTodoList = [...todoList];
      newTodoList[index] = updatedTask;
      setTodoList(newTodoList);
    }
  }

  return (
    <div className="todo-list">
      <h1>My To-Do List</h1>
      <ul>
        {todoList.map((data, index) => (
          <li key={index}>
            {data}
            <button onClick={() => deleteHandler(index)}>DEL</button>
            <button onClick={() => updateHandler(index, data)}>UPDATE</button>
          </li>
        ))}
      </ul>
      <InputToDo inputHandler={inputHandler} />
    </div>
  )
}

export default App