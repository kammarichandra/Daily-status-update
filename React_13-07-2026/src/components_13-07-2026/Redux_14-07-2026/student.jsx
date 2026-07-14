import { useState } from "react";

import {
    useSelector,
    useDispatch
} from "react-redux";


import {
    addstudent,
    deletestudent
} from "./Studentslice";


function Student() {


    const [name, setName] = useState("");


    const students = useSelector(

        (state) => state.student.students

    );


    const dispatch = useDispatch();



    const handleAdd = () => {


        if (name.trim() !== "") {


            dispatch(addstudent(name));


            setName("");

        }


    };

    return (
    <div className="student-container">

        <h2>
            Student Management
        </h2>


        <input
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />


        <button onClick={handleAdd}>
            Add Student
        </button>


        <hr />


        {
            students.map((student)=>(
                
                <div 
                    className="student-item"
                    key={student.id}
                >

                    <span>
                        {student.name}
                    </span>


                    <button
                        onClick={() =>
                            dispatch(
                                deletestudent(student.id)
                            )
                        }
                    >
                        Delete
                    </button>

                </div>

            ))
        }


    </div>
);
}


export default Student;