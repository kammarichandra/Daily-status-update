function ObjectEvent(){

    function handleClick(event){

        console.log(event.target);

    }

    return(

        <button onClick={handleClick}> Click </button>
    );

}

export default ObjectEvent;