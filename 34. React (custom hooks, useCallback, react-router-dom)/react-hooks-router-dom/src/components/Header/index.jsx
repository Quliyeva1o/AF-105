import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ background: "black" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
