import React from 'react'
import AxiosGet from './AxiosGet'
import AxiosPost from './AxiosPost'
import AxiosDelete from './AxiosDelete'
import AxiosPut from './AxiosPut'


function AxiosHome() {
  return (
    <div>
        <AxiosGet/>
        <AxiosPost/>
        <AxiosDelete/>
        <AxiosPut/>
    </div>
  )
}

export default AxiosHome;