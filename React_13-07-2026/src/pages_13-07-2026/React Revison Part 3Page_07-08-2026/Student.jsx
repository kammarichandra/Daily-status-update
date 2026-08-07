import { useParams } from "react-router-dom";

export default function Student() {

    let { id } = useParams();

    return (
        <h2>
            Student ID : {id}
        </h2>
    );

}