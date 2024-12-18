import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/api';

const Create_thread = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <a onClick={() =>navigate('/')} className="px-4 py-2 cursor-pointer">←</a>
      <input type="text" value={title} onChange={e =>setTitle(e.target.value)} className="w-full my-4 p-2 border rounded" />
      <button onClick={() =>title && api.createThread(title).then(() =>navigate('/'))} className="px-4 py-2 bg-blue-600 text-white rounded" >作成 </button>
    </div>
  );
};

export default Create_thread;