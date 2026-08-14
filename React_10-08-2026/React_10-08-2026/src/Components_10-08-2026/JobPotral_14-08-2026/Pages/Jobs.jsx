import React, { useState } from "react";

import { jobs } from './../Data/Jobs';
import JobCard from './../Components/JobCard';

function Jobs() {

  let [search, setSearch] = useState("");

  let [type, setType] = useState("All");

  let filteredJobs = jobs.filter((job) => {

      let matchesSearch =
        job.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      let matchesType =
        type === "All" ||
        job.type === type;

      return (
        matchesSearch &&
        matchesType
      );
    });

  return (
    <div className="container">

      <h1> 💼 Available Jobs </h1>

      <div className="filters">

        <input type="text" placeholder="Search job..."  value={search} onChange={(e) => setSearch(e.target.value) } />

        <select value={type} onChange={(e) => setType(e.target.value) } >

          <option value="All"> All </option>

          <option value="Full Time"> Full Time </option>

          <option value="Part Time"> Part Time </option>

          <option value="Remote"> Remote </option>

        </select>

      </div>

      <div className="grid">

        {filteredJobs.map(
          (job) => (

            <JobCard  key={job.id} job={job}/>

          )
        )}

      </div>

      {filteredJobs.length === 0 && (

        <h2> No jobs found  </h2>

      )}

    </div>
  );
}

export default Jobs;