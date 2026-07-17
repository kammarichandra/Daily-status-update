function ChildtoParent(Props){
    return (
        <button onClick={()=> Props.sendData("hello parent")}>Send</button>
    )
}
export default ChildtoParent;