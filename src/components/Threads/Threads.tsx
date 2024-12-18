import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@/api';

const Threads = () => {
  const { thread_id } = useParams<{ thread_id: string }>();
  const [response, setResponse] = useState<{ posts: { id: string; post: string; }[] }>({ posts: [] });

  useEffect(() => {
    if (thread_id) {
      api.getThreadPosts(thread_id, '0').then(setResponse);
    }
  }, [thread_id]);

  return (
    <div className="">
      {response.posts.length === 0 ? (
        <div className="shadow-md bg-white p-4 text-center text-gray-600">
          投稿なし
        </div>
      ) : (
        response.posts.map(post => (
          <div key={post.id} className="shadow-md bg-white p-2">
            <p className="text-gray-800">{post.post}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Threads;