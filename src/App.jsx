import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import  Search  from './Search'


function App() {
  

  return (
       <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/search/:searchTerm' exact Component={Search}/>
            </Routes>
          </BrowserRouter>
       </div>
      
  )
}

export default App
/*
          <BrowserRouter>
            <Routes>
              <Route path='/' exact Component={Home}/>
            </Routes>
          </BrowserRouter>
*/