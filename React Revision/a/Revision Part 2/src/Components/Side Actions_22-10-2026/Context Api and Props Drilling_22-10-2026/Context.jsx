import React from 'react'
import { AppProvider } from './Context/AppContext'
import Header from './Components/Header'
import Toolbar from './Components/ToolBar'
import Content from './Components/Content'

function Context() {
  return (
    <div>
        <AppProvider>
            <Header/>
            <Toolbar/>
            <Content/>
        </AppProvider>
    </div>
  )
}

export default Context