import React, { FC, useEffect, useState } from 'react';
import { api } from '@/api';

interface thread_listProps {}

const thread_list: FC<thread_listProps> = () => {
  const [threads, setThreads] = useState<Array<{ id: string; title: string }>>([]);

  useEffect(() => {
    api.getThreads('0').then(setThreads);
  }, []);

  return (
    <div className="space-y-4">
      {threads.map((thread) => (
        <div key={thread.id} 
          className="rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-gray-800 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" >
          <div className="text-lg dark:text-gray-100">{thread.title}</div>
        </div>
      ))}
    </div>
  );
};

export default thread_list;