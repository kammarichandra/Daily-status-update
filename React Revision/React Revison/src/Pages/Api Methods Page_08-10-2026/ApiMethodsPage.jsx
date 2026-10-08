import React from 'react'
import Post from '../../Components/React_Api_08-10-2026/Api Metods_08-10-2026/Post'
import Put from '../../Components/React_Api_08-10-2026/Api Metods_08-10-2026/Put'
import Patch from '../../Components/React_Api_08-10-2026/Api Metods_08-10-2026/Patch'
import Delete from '../../Components/React_Api_08-10-2026/Api Metods_08-10-2026/Delete'

function ApiMethodsPage() {
  return (
    <div>
        <Post/>
        <Put/>
        <Patch/>
        <Delete/>
    </div>
  )
}

export default ApiMethodsPage