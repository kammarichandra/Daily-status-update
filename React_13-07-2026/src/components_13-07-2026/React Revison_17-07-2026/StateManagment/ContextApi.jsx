
import { useContext } from "react";
import UserContext from "./UserContext";

function ContextApi(){

    let name = useContext(UserContext)
    return (
        <div>
            <h1>welcome to nyb {name}</h1>
        </div>
    )
}
export default ContextApi;