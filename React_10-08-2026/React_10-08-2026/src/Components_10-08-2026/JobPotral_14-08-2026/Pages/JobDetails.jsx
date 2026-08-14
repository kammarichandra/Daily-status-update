import React from "react";
import { Link , useParams } from "react-router-dom";
import { jobs } from './../Data/Jobs';

function JobDetails() {

  let { id } = useParams();

  let job = jobs.find( (job) => job.id === Number(id));

  if (!job) {

    return (
      <div className="container">

        <h1> Job Not Found  </h1>

        <Link to="/jobs"> Back to Jobs </Link>

      </div>
    );
  }

  return (
    <div className="container">

      <h1> {job.title} </h1>

      <div className="card">

        <h2> {job.company} </h2>

        <p> 📍 Location:  {" "} {job.location} </p>

        <p> 💰 Salary: {" "} {job.salary}</p>

        <p>🕒 Job Type: {" "} {job.type} </p>

        <p>👨‍💻 Experience:  {" "} {job.experience} </p>

        <h3> Required Skills </h3>

        <ul>

          {job.skills.map(
            (skill) => (
              <li key={skill}>
                {skill}
              </li>
            )
          )}

        </ul>

        <Link to={`/apply/${job.id}`} >

          <button> Apply Now </button>

        </Link>

      </div>

    </div>
  );
}

export default JobDetails;