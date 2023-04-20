import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './search.css'

 const Search = () => {
  const params =useParams();
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`https://pixabay.com/api/?key=35383891-3116e88578367eb414f98bc15&q=${params.searchTerm}`).then(response => setData(response.data.hits))
  },[])
  return <>
       <div className='search-results'>
       <h1>Images related to {params.searchTerm}</h1>
         <div className="main-img">
          {
            data.map(imgObj=>
              <div className="card">
                <img className='img-card' src={imgObj.largeImageURL} height='250px'/>
              </div>
            )
          }
         </div>
       </div>
  
  </>
  
}

export default Search