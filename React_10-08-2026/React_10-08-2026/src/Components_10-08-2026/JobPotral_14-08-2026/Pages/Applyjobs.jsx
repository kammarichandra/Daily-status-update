import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Jobs from './Jobs';

function ApplyJobs() {

  let { id } = useParams();

  let navigate = useNavigate();

  let job = jobs.find( (job) =>
      job.id === Number(id)
  );

  let [name, setName] = useState("");

  let [email, setEmail] = useState("");

  let [resume, setResume] = useState("");

  let handleSubmit = (e) => {

    e.preventDefault();

    if ( !name || !email || !resume ) {

      alert("Please fill all fields" );

      return;
    }

    alert( `Application submitted for ${job.title}!` );

    navigate("/jobs");
  };

  return (
    <div className="container">

      <h1> Apply for {job.title} </h1>

      <div className="card">

        <form onSubmit={handleSubmit} >

          <label> Full Name </label>

          <input type="text" value={name} onChange={(e) => setName(e.target.value) }/>

          <label> Email </label>

          <input type="email" value={email} onChange={(e) => setEmail(e.target.value) }/>

          <label> Resume Link </label>

          <input type="text" placeholder="Google Drive / LinkedIn URL" value={resume} onChange={(e) => setResume(e.target.value)  } />

          <button type="submit"> Submit Application </button>

        </form>

      </div>

    </div>
  );
}

export default ApplyJobs;