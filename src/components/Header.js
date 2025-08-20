import { useState } from "react";
import LOGO_URL from "../../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-pink-100 shadow-md">
      {/* Logo */}
      <img className="w-16 h-16 object-contain" src={LOGO_URL} alt="App Logo" />

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li className="flex items-center gap-2">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/" className="hover:text-pink-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-600 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-600 transition">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-pink-600 transition">
              Grocery
            </Link>
          </li>
          <li>
            <span className="hover:text-pink-600 transition">Cart</span>
          </li>

          {/* Login/Logout Button */}
          <li>
            <button
              className="px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-200 transition"
              onClick={() =>
                setbtnNameReact(btnNameReact === "Logout" ? "Login" : "Logout")
              }
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
