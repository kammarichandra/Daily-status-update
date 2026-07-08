function childbtn({sendmsg}){

    return (

        <div className="card">

            <h2>button Example</h2>

            <button onClick={()=>sendmsg("hello parent ! from child")}>
                send msg
            </button>
        </div>
    )
}
export default childbtn;