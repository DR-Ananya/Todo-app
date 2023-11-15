// Import FormEvent and useState from React. Import useTodos from the "todos" store.
import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

// Define the AddToDo functional component.
const AddToDo = () => {
  // Declare state variables todo and setTodo using the useState hook.
  const [todo, setTodo] = useState("");

  // Destructure the handleAddToDo function from the useTodos custom hook.
  const { handleAddToDo } = useTodos();

  // Define handleFormSubmit function to handle form submission.
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    // Call the handleAddToDo function from the useTodos hook with the current todo value.
    handleAddToDo(todo);

    // Clear the todo input field after submitting the form.
    setTodo("");
  };

  // Return a form element with an input field and a button.
  // Handle input changes and form submission.
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

// Export the AddToDo component as the default export.
export default AddToDo;
