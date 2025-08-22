import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
        🛒 Your Cart
      </h1>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-700">
          Total Items: {cartItems.length}
        </h2>
        {cartItems.length > 0 && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-gray-500 text-lg font-medium">
          Cart is empty. Add some tasty items! 🍔
        </div>
      ) : (
        <div className="space-y-4">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
