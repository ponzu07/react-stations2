import { Link } from 'react-router-dom';

const header = () => (
  <header className="w-full border-b">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold hover:text-blue-600">
        React掲示板
      </Link>
      <Link to="/threads/new" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
        スレッドを建てる
      </Link>
    </div>
  </header>
);

export default header;