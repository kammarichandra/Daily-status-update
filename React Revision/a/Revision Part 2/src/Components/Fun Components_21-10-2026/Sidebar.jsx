function Sidebar() {
    let menuItems = ["Dashboard","Employees","Attendence","Reports"];

  return (
    <aside>
        <h3>Menu</h3>
        <ul>
            {menuItems.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </aside>
  )
}

export default Sidebar