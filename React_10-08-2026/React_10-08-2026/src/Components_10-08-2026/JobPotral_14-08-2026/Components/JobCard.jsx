import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {

  return (
    <div className="card">

      <h2> {job.title} </h2>

      <h3> {job.company} </h3>

      <p>📍 {job.location}</p>

      <p> 💰 {job.salary}</p>

      <p> 🕒 {job.type}</p>

      <Link to={`/jobs/${job.id}`}>

        <button> View Details </button>

      </Link>

    </div>
  );
}

export default JobCard;