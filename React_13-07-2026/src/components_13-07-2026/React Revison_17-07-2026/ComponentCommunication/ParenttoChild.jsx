function ParenttoChild(Props){
    return (
        <div>
            <h2>Child Component</h2>
            <p>Name : {Props.name}</p>
            <p>Age : {Props.age}</p>
        </div>
    )
}
export default ParenttoChild;