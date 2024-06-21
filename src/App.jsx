import React from 'react'
import Navbar from './component/Navbar'
import Newsitems from './component/Newsitems'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Newsitems category='general' />} />
        <Route path='/business' element={<Newsitems category='business' />} />
        <Route path='/entertainment' element={<Newsitems category='entertainment' />} />
        <Route path='/health' element={<Newsitems category='health' />} />
        <Route path='/general' element={<Newsitems category='general' />} />
        <Route path='/sports' element={<Newsitems category='sports' />} />
        <Route path='/technology' element={<Newsitems category='technology' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
