import { useState } from "react"; // Importamos useState para manejar el estado en el componente
import { Todo } from "./Todo";

export const TodoApp = () => {
  // Inicialización del estado con un valor inicial de ""
  // title: contiene el valor actual del estado | setTitle: función para actualizar el estado
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  // onChange es la función que actualiza el valor de title cada vez que se escribe en el input
  const onChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  };

  const handleDelete = (id) => {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-60" >
      <h1 className="text-white text-3xl mb-4" >Todo App</h1>
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <input
          onChange={onChange}
          type="text"
          value={title}
          className="mb-4 p-2 w-96 border rounded-md"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className=" ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 "
        >
          Add
        </button>
      </form >
      <div className="text-white flex flex-col items-center justify-center" >
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
