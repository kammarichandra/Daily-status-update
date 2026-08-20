import React from 'react'

function User({name}) {
    console.log("user component rendered");

  return (
    <div>
        <h2>hello ,{name}</h2>
    </div>
  )
}

export default React.memo(User);
// export default User;