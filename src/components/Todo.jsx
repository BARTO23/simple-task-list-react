import { useState } from "react";

export const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsEdit(false);
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = () => {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    };

    return (
      <form onSubmit={handleSubmit} className="text-white">
        <input onChange={handleChange} value={newValue} type="text" />
        <button onClick={handleClickUpdateTodo}>Update</button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="bg-[#3e3c3d] mb-2 px-20 py-5 rounded-lg max-w-80 flex flex-col items-center justify-center ">
        <div className="text-xl font-bold" >{item.title}</div>

        <div>
          <button
            className="bg-[#ff8000] px-3 py-2 ml-2 rounded-lg"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
          <button
            className="bg-[#c92c3e] px-3 py-2 ml-2 rounded-lg"
            onClick={() => {
              onDelete(item.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  return <div>{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};
