import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/api';


const thread_list = () => {
  const [threads, setThreads] = useState<{ id: string; title: string }[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    api.getThreads('0').then(setThreads);
  }, []);

  return (
    <div className="space-y-4">{threads.map(thread =>( 
      <div key={thread.id} onClick={() =>navigate(`/threads/${thread.id}`)} className="rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-gray-800 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" >
        <div className="text-lg dark:text-gray-100">{thread.title}</div>
      </div>))} 
    </div>
  );
};

export default thread_list;