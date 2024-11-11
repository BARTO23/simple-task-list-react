import { useState } from "react";

export const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {

    const [newValue, setNewValue] = useState(item.title);
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsEdit(false);
    }

    
    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    }

    const handleClick = () => {
      setIsEdit(false);
    }

    return (
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} value={newValue} type="text" />
        <button onClick={handleClick} >Update</button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div>
        {item.title} <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={ () => {handleDelete} } >Delete</button>
      </div>
    );
  };

  return <div>{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};
