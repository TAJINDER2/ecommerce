import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Payment() {
  const { items } = useSelector(state => state.cart);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', number: '', expiry: '', cvv: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment successful!');
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <div className="p-4 sm:p-6 max-w-xl mx-auto animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go shopping.</Link></p>
      ) : (
        <>
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <ul className="mb-4 space-y-2">
            {items.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} × {item.qty}</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold mb-6">Total: ${total.toFixed(2)}</p>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
            <input type="text" name="name" placeholder="Name on Card" className="border rounded px-3 py-2 w-full" required value={form.name} onChange={handleChange} />
            <input type="text" name="number" placeholder="Card Number" pattern="\\d{16}" className="border rounded px-3 py-2 w-full" required value={form.number} onChange={handleChange} />
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="expiry" placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\\/\\d{2}" className="border rounded px-3 py-2 w-full" required value={form.expiry} onChange={handleChange} />
              <input type="text" name="cvv" placeholder="CVV" pattern="\\d{3}" className="border rounded px-3 py-2 w-full" required value={form.cvv} onChange={handleChange} />
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <Link to="/cart" className="text-blue-600 underline">Back to Cart</Link>
              <button className="bg-green-600 hover:bg-green-700 text-white rounded px-6 py-2">Pay ${total.toFixed(2)}</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}