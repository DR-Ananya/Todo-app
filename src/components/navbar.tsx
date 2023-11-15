// Import Link and useSearchParams from react-router-dom.
import { Link, useSearchParams } from 'react-router-dom';

// Define the Navbar functional component.
const Navbar = () => {
  // Use useSearchParams to get search parameters from the URL.
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");

  // Return a navigation bar with links for different todo categories.
  return (
    <nav>
      <Link to="/" className={todosData === null ? "active" : ""} > All </Link>
      <Link to="/?todos=active" className={todosData === "active" ? "active" : ""} > Active </Link>
      <Link to="/?todos=completed" className={todosData === "completed" ? "active" :""} > Completed </Link>
    </nav>
  );
};

// Export the Navbar component as the default export.
export default Navbar;
