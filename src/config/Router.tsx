import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Post from '../pages/Post'
export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
          <Route path="/Post/:id" element={<Post />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
