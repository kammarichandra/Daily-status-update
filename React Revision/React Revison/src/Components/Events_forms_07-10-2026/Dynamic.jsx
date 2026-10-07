import React, { useState } from 'react'

function Dynamic() {
  let [skills, setSkills] = useState(['']);

  let addSkill = () => {
    setSkills([...skills, '']);
  };

  let removeSkill = (index) => {
    let updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  let handleSkillChange = (index, value) => {
    let updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  let handleSkills = (event) => {
    event.preventDefault();
    console.log('skills : ', skills);
  };

  return (
    <div>
      <h2>Employee Skills</h2>

      <form onSubmit={handleSkills}>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type='text'
              value={skill}
              placeholder={`Enter Skill ${index + 1}`}
              onChange={(event) => handleSkillChange(index, event.target.value)}
            />

            {skills.length > 1 && (
              <button type='button' onClick={() => removeSkill(index)}>
                Remove
              </button>
            )}

            <br />
            <br />
          </div>
        ))}

        <button type='button' onClick={addSkill}>
          Add Skill
        </button>

        <button type='submit'>Submit Skills</button>
      </form>
    </div>
  );
}

export default Dynamic