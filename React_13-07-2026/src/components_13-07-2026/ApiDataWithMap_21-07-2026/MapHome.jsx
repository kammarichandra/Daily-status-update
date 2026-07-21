import React from 'react'
import Comments from './Comments'
import Posts from './Posts'
import Products from './Products'
import UsersList from './UsersList'

function MapHome() {
  return (
    <div>
        <Comments/>
        <Posts/>
        <Products/>
        <UsersList/>
    </div>
  )
}

export default MapHome;