import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css'

const Home = () => {
  let navigate = useNavigate();
  
  const [searchTerm,setSearchTerm]=useState("");
  return (
    <div className='background'>
      <header>
        <h2 className='brand'>UNSPLASH</h2>
        <ul>
          <li>Login</li>
          <li>Create Account</li>
        </ul>
      </header>
      <main>
        <h1 className='heading'>Stunning Free Images & Royalty Free Stock</h1>
        <p className='brief'>Over 2.3 million high quality stock images shared by our talented community</p>
        <input type='text' className='text' onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder="Search images"/>
        <button className='search' onClick={()=> searchTerm && navigate(`/search/${searchTerm}`)}>Search</button>
      </main>
    </div>
  )
}

export default Home