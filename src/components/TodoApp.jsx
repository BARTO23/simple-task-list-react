import { useState } from "react"; // Importamos useState para manejar el estado en el componente
import { Todo } from "./Todo";

export const TodoApp = () => {
  // Inicialización del estado con un valor inicial "hola"
  // title: contiene el valor actual del estado | setTitle: función para actualizar el estado
  const [title, setTitle] = useState("hola");
  const [todos, setTodos] = useState([]);

  // onChange es la función que actualiza el valor de title cada vez que se escribe en el input
  const onChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id)
    item.title = value
    setTodos(temp)
  }
  
  const handleDelete = (id) => {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input muestra y controla el valor de title */}
        <input onChange={onChange} type="text" value={title} />
        <button onClick={handleSubmit} type="submit">
          Add
        </button>
      </form>
      <div>
        {todos.map((item) => (
          <Todo key={item.id} item = {item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};
