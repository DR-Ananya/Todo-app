// Import useTodos and useSearchParams from "todos" store and react-router-dom, respectively.
import { useTodos } from '../store/todos';
import { useSearchParams } from "react-router-dom";

// Define the Todos functional component.
const Todos = () => {
  // Use the useTodos hook to get todos and related functions.
  const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();

  // Use useSearchParams to get search parameters from the URL.
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  console.log("🚀 ~ file: todos.tsx:10 ~ Todos ~ todos̥Data:", todosData)

  // Initialize filterData with all todos.
  let filterData = todos;

  // Filter todos based on the selected category (active, completed, etc.).
  if(todosData === "active"){
      filterData = filterData.filter((task) => !task.completed  )
  }

  if(todosData === "completed"){
      filterData = filterData.filter((task) => task.completed  )
  }

  // Return a list of todos with checkboxes, labels, and delete buttons.
  return (
    <ul className="main-task">
        {
            filterData.map((todo) => {
                return <li key={todo.id}>
                    <input type="checkbox"  id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`} > {todo.task} </label>

                    {
                        todo.completed && (
                            <button type='button' 
                            onClick={() => handleDeleteTodo(todo.id)} >Delete</button>
                        )
                    }
                </li>
            })
        }
    </ul>
  );
};

// Export the Todos component as the default export.
export default Todos;
