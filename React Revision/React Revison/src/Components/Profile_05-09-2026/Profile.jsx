import React from 'react'

function Profile() {
    let name = "kammari chandra sekhar"
    let role = "frountend dev"
    let location = "IND"
    return (
        <section id="profile" className="profile">
            <div className="profile-image">
                CS
            </div>

            <div>
                <h2>{name}</h2>
                <h3>{role}</h3>
                <p>
                    I am a passionate fresher interested in
                    Java, Web Development and React.
                </p>
                <p>{location}</p>

                <button>Contact Me</button>
            </div>
        </section>
    )
}

export default Profile