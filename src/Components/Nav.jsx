import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="bg-blue-500 p-4 text-white flex justify-between">
        <div className="text-lg font-bold">Tuwaiq</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
