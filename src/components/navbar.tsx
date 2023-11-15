// components/navbar.tsx

import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
    const [searchParams] = useSearchParams();
    let todosData = searchParams.get("todos");

    return (
        <nav>
            <div className="nav-section">
                <Link to="/" className={todosData === null ? "active" : ""}>
                    All
                </Link>
            </div>
            <div className="nav-section">
                <Link
                    to="/?todos=active"
                    className={todosData === "active" ? "active" : ""}
                >
                    Active
                </Link>
            </div>
            <div className="nav-section">
                <Link
                    to="/?todos=completed"
                    className={todosData === "completed" ? "active" : ""}
                >
                    Completed
                </Link>
            </div>
            {/* Placeholder for future sections */}
            <div className="nav-section">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            {/* Placeholder for future sections */}
            <div className="nav-section">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </nav>
    );
};

export default Navbar;

