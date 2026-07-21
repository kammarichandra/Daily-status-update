import React from 'react'
import Get from './Get'
import Put from './Put'
import Post from './Post'
import Loading from './Loading'
import Delete from './Delete'


function ApiHome() {

  return (

    <div>
        <Get/>
        <Put/>
        <Post/>
        <Loading/>
        <Delete/>
    </div>

  )
}

export default ApiHome;