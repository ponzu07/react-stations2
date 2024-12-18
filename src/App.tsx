import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThreadList from './components/thread_list/thread_list';
import Header from './components/header/header';
import Create_thread from './components/Create_thread/Create_thread';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main className="bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/threads/new" element={<Create_thread />} />
        </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;