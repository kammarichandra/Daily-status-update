import React from 'react'
import CustomHookHome from '../../components_13-07-2026/CustomHook_28-07-2026/CustomHookHome'
import UsersApi from "../../components_13-07-2026/CustomHook_28-07-2026/UsersApi"
import Login from "../../components_13-07-2026/CustomHook_28-07-2026/FormHandling/Login"
import Screen from "../../components_13-07-2026/CustomHook_28-07-2026/WindowResize/Screen"
import Theme from "../../components_13-07-2026/CustomHook_28-07-2026/ThemeManagment/Theme"
import ReuseHome from "../../components_13-07-2026/CustomHook_28-07-2026/ReuseHook/ReuseHome"

function CustomHookPage() {
  return (
    <div>
        <h1>UseCounter hook</h1>
        <CustomHookHome/>
        <hr />
        <h1>custom hook using Api calls</h1>
        <UsersApi/>
        <hr />
        <h1>Custom hook using Form Handling</h1>
        <Login/>
        <hr />
        <h1>Screen size</h1>
        <Screen/>
        <hr />
        <h1>Theme Managment </h1>
        <Theme/>
        <hr />
        <h1>Reusable component </h1>
        <ReuseHome/>

    </div>
  )
}

export default CustomHookPage