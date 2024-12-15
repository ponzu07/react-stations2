import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThreadList from './components/thread_list/thread_list';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThreadList />
  )
}

export default App
