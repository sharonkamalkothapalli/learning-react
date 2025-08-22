import { useState, useContext } from "react";
import LOGO_URL from "../../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); // subscribing to the store using selector
  console.log(cartItems);

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
            <Link
              to="/cart"
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-pink-600 transition"
            >
              Cart
              {cartItems.length > 0 && (
                <span className="bg-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
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
          <li>{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
