import React from 'react'
import { Link } from "react-router-dom";
function Home1() {
    return (
        <div className="container home">

            <h1> Find Your Dream Job 🚀 </h1>

            <p> Search thousands of jobs and find your next opportunity. </p>

            <Link to="/jobs">

                <button>  Explore Jobs </button>

            </Link>

        </div>
    )
}

export default Home1