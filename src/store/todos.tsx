// Import ReactNode, createContext, useContext, and useState from React.
import { ReactNode, createContext, useContext, useState } from "react";

// Define TodosProviderProps type for props of TodosProvider component.
export type TodosProviderProps = {
    children: ReactNode;
}

// Define Todo type for the structure of a todo item.
export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

// Define TodosContext type for the context value.
export type TodosContext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
}

// Create a context with an initial value of null.
export const todosContext = createContext<TodosContext | null >(null);

// Define TodosProvider functional component.
export const TodosProvider = ({ children }: TodosProviderProps) => {
    // Declare state variable todos using the useState hook.
    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            // Try to get todos from local storage or set an empty array.
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[];
        } catch (error) {
            return [];
        }
    });

    // Define handleAddToDo function to add a new todo.
    const handleAddToDo = (task: string) => {
        setTodos((prev) => {
          const newTodos: Todo[] = [
            {
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date()
            },
            ...prev
          ];
          localStorage.setItem("todos", JSON.stringify(newTodos));
          return newTodos;
        });
    }

    // Define toggleTodoAsCompleted function to mark a todo as completed.
    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if(todo.id === id){
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    }

    // Define handleDeleteTodo function to delete a todo.
    const handleDeleteTodo = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    }

    // Return TodosContext.Provider with the context value and children.
    return <todosContext.Provider value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}>
        {children}
    </todosContext.Provider>
}

// Define useTodos custom hook to use the Todos context.
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    // Throw an error if useTodos is used outside of the TodosProvider.
    if (!todosConsumer) {
        throw new Error("useTodos used outside of Provider");
    }
    return todosConsumer;
}
