import React, { FC, useState } from 'react';
import { api } from '@/api';

interface Create_threadProps {
  Back: () => void;
}

const Create_thread: FC<Create_threadProps> = ({ Back }) => {
  const [title, setTitle] = useState('');

  return (
    <div className=''>
      <a onClick={Back} className="px-4 py-2 cursor-pointer" >←</a>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full my-4 p-2 border rounded" />
      <button onClick={() => title && api.createThread(title).then(Back)} className="px-4 py-2 bg-blue-600 text-white rounded">作成</button>
    </div>
  );
};

export default Create_thread;