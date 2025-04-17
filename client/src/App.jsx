import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-[#F6F6F2]">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
