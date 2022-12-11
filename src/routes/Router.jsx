
import React from 'react'
import {Route, Routes,Navigate} from 'react-router-dom'
import Home from '../pages/home/Home';
import Menu from '../pages/menu/Menu'


function Router() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    {/* path mặc định, muốn chuyển hướng thì ta phải điều chỉnh nguồn sau path gốc */}
    <Route path="/menu" element={<Menu/>}/>
   
  </Routes>
  )
}

export default Router
