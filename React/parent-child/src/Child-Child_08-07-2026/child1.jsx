function child1(Props){

    return (

        <button onClick={() => Props.sendmsg("hello from child 1")}>Send msg</button>
    )
}
export default child1