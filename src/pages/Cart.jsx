import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, incrementQty, decrementQty } from '../features/cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go shopping.</Link></p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id} className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded shadow gap-2">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <span className="font-medium">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => dispatch(decrementQty(item.id))}>-</button>
                    <span>{item.qty}</span>
                    <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => dispatch(incrementQty(item.id))}>+</button>
                  </div>
                </div>
                <span className="font-semibold">${(item.price * item.qty).toFixed(2)}</span>
                <button className="text-red-500" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">Total: ${total.toFixed(2)}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2"
              onClick={() => navigate('/payment')}
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}