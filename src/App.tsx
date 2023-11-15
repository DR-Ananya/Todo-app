// Import AddToDo, Navbar, Todos components, and App.css file.
import AddToDo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";

// Define the App functional component.
const App = () => {
  // Return the main structure of the app with a title, Navbar, AddToDo, and Todos components.
  return (
   <main>
      <h1>TODO LIST </h1>
      <Navbar />
      <AddToDo />
      <Todos />
   </main>
  );
}

// Export the App component as the default export.
export default App;


