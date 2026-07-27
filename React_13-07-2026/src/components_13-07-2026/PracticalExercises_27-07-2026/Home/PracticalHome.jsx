import React from 'react'
import Users from '../Components/Users'
// import UserswithMemo from '../Components/UserswithMemo';
function PracticalHome() {
  return (
    <div>
        <h1>Without Memo</h1>
        <Users/>
        <hr />
        <h1>Users With Memo</h1>
        <UserswithMemo/>
    </div>
  )
}

export default PracticalHome;