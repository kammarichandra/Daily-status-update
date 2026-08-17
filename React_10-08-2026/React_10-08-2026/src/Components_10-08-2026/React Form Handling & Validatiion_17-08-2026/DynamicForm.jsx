import React, { useState } from 'react'

function DynamicForm() {

    let [skills, setskills] = useState([""]);

    let handlechange = (index, value) => {

        let updatedskills = [...skills];

        updatedskills[index] = value;

        setskills(updatedskills);
    };

    let addskill = () => {
        setskills([...skills, ""]);
    }

    let removeskill = (index) => {
        let updatedskills = skills.filter((_, i) => i !== index);

        setskills(updatedskills);
    };

    let handlesubmit = (e) => {
        e.preventDefault();
        console.log(skills);
    };


    return (
        <form onSubmit={handlesubmit}>
            <h2>Skills</h2>

            {skills.map((skill, index) => (

                <div key={index}>
                    
                    <input type="text" placeholder={`Skill ${index + 1}`} value={skill}
                        onChange={(e) => handlechange(index, e.target.value) }
                    />

                    <button type="button" onClick={() => removeskill(index)} > Remove </button>

                    <br />
                    <br />

                </div>

            ))}

            <button type="button" onClick={addskill}> + Add Skill </button>

            <br />
            <br />

            <button type="submit">Submit</button>

        </form>
    )
}

export default DynamicForm