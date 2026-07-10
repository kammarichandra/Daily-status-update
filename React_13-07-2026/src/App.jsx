import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ComponentsPage from './pages_13-07-2026/components/ComponentsPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/components' element={<ComponentsPage/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App