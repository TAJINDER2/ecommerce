import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useState } from 'react';

export default function ShoeCard({ shoe }) {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(shoe));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1500);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center animate-fadeIn relative">
      <img src={shoe.image} alt={shoe.name} className="w-full max-w-xs h-48 object-contain" />
      <h3 className="mt-2 font-semibold text-lg text-center">{shoe.name}</h3>
      <p className="text-gray-600">${shoe.price.toFixed(2)}</p>
      <button
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-1 w-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {showMessage && (
        <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-sm px-3 py-1 rounded shadow">
          Item added!
        </div>
      )}
    </div>
  );
}
