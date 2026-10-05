import React from 'react'

function Skills() {
    let skills = [
        "Core Java",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "MySQL"]
    return (
        <section id="skills" className="section">
            <h2>Skills</h2>

            <div className="skills-container">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills