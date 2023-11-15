import { useTodos } from '../store/todos';
import { useSearchParams } from "react-router-dom";

const Todos = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

    const [searchParams] = useSearchParams();
    let todosData = searchParams.get("todos");
    console.log("🚀 ~ file: todos.tsx:10 ~ Todos ~ todosData:", todosData);

    let filterData = todos;

    if (todosData === "active") {
        filterData = filterData.filter((todo) => !todo.completed);
    }

    if (todosData === "completed") {
        filterData = filterData.filter((todo) => todo.completed);
    }

    return (
        <ul className="main-task">
            {filterData.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`}>
                        Title: {todo.title} <br />
                        Description: {todo.description}
                    </label>

                    {todo.completed && (
                        <button
                            type='button'
                            onClick={() => handleDeleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Todos;

