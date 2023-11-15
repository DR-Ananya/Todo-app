import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

const AddToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddToDo;














