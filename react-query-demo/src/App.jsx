import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from './components/PostsComponent.jsx'


function App() {
 
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <h1>Welcome to my React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <PostsComponent />
      </QueryClientProvider>
    </>
  )
}

export default App
