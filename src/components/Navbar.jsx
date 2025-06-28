import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/shoes/shoesSlice';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between bg-white shadow p-4 gap-2">
      <Link to="/" className="text-2xl font-bold">ShoeStore</Link>
      <input
        type="text"
        placeholder="Search shoes..."
        className="border rounded px-2 py-1 w-full md:w-56"
        onChange={e => dispatch(setSearchQuery(e.target.value))}
      />
      <Link to="/cart" className="font-semibold hover:underline">Cart</Link>
    </nav>
  );
}