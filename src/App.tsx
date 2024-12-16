import { useState } from 'react'
import ThreadList from './components/thread_list/thread_list';
import Header from './components/header/header'
import Create_thread from './components/Create_thread/Create_thread';
import './App.css'

function App() {
  const [CreatingThread, setCreatingThread] = useState(false);

  return (
    <main className="bg-gray-50">
      <Header threadCreateClick={() => setCreatingThread(true)} />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Create_threadコンポーネント切り替え */}
        {CreatingThread ? (
            <Create_thread Back={() => setCreatingThread(false)} />
          ) : (
          <>
            <h1 className="text-2xl font-bold mb-6">スレッド一覧</h1>
            <ThreadList />
          </>
        )}
      </div>
    </main>
  )
}

export default App
