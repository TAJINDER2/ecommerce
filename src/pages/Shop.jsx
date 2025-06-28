import { useSelector } from 'react-redux';
import ShoeCard from '../components/ShoeCard';

export default function Shop() {
  const { list, searchQuery } = useSelector(state => state.shoes);

  const filtered = list.filter(shoe =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {filtered.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} />)}
    </div>
  );
}