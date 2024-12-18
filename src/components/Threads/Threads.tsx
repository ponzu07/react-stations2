import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@/api';

const Threads = () => {
  const { thread_id } = useParams<{ thread_id: string }>();
  const [response, setResponse] = useState<{ posts: { id: string; post: string; }[] }>({ posts: [] });
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    if (thread_id) {
      api.getThreadPosts(thread_id, '0').then(setResponse);
    }
  }, [thread_id]);

  const postBtn = async () => {
    if (!thread_id || !newPost) return;
    
    await api.createPost(thread_id, newPost);
    const updated = await api.getThreadPosts(thread_id, '0');
    setResponse(updated);
    setNewPost('');
  };

  return (
    <div>
      <div className="space-y-4">{response.posts.length === 0 ? ( 
        <div className="shadow-md bg-white p-4 text-center text-gray-600">投稿なし </div>) : ( response.posts.map(post =>(
        <div key={post.id} className="shadow-md bg-white p-2">
          <p className="text-gray-800">{post.post}</p>
        </div>)) )} 
      </div>
      <div className="mt-4">
        <textarea value={newPost} onChange={e =>setNewPost(e.target.value)} className="w-full p-2 border rounded" />
        <button onClick={postBtn} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded" >投稿</button>
      </div>
    </div>
  );
};

export default Threads;