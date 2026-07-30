function DeleteUsers(){

    const deleteUser = (id) => {
        console.log("Deleting user", id);
    };


    return(
        <div>

            <button onClick={() => deleteUser(101)}> Delete </button>

        </div>
    );
}

export default DeleteUsers;