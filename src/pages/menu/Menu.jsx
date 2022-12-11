import React from 'react'
import Header from '../../components/Layout/Header';
//import CommonSection from '../../components/UI/CommonSection';
import SearchBar from '../../components/searchBar/SearchBar'
// import mainDLL from '../../components/add_delete/mainDLL'
// import Cart from '../../components/Cart/Cart'

function menu() {
  return (
    <div>
        <Header/>
        
        <SearchBar/>
    </div>
  )
}

export default menu