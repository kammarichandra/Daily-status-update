import React, { useState, useMemo, useCallback } from "react";
import studentsData from "./data";
import SerchBar from "../Components/SerchBar";
import Studentlist from "../Components/Studentlist";
import Statistics from "../Components/Statistics";

function StudentHome() {

    let [search, setSearch] = useState("");
    let [filter, setFilter] = useState("All");
    let [sort, setSort] = useState("None");

    // useCallback

    let handleSearch = useCallback((value) => {
        setSearch(value);
    }, []);

    // useMemo

    let filteredStudents = useMemo(() => {

        let data = [...studentsData];

        // Search

        data = data.filter(student =>

            student.name.toLowerCase().includes(search.toLowerCase())
        );

        // Filter

        if (filter === "Pass") {

            data = data.filter(student => student.marks >= 50);
        }

        if (filter === "Fail") {
            data = data.filter(student => student.marks < 50);
        }

        // Sort

        if (sort === "High") {
            data.sort((a, b) => b.marks - a.marks);
        }

        if (sort === "Low") {
            data.sort((a, b) => a.marks - b.marks);
        }

        return data;

    }, [search, filter, sort]);

    // useMemo

    let average = useMemo(() => {

        if (filteredStudents.length === 0) return 0;

        return (

            filteredStudents.reduce((sum, student) => sum + student.marks, 0  ) / filteredStudents.length

        );

    }, [filteredStudents]);

    return (

        <div className="container">

            <h1>Student Result Dashboard</h1>

            <SerchBar  search={search} onSearch={handleSearch} />

            <br /><br />

            <select onChange={(e) => setFilter(e.target.value)}>

                <option>All</option>
                <option>Pass</option>
                <option>Fail</option>

            </select>

            <select onChange={(e) => setSort(e.target.value)} >

                <option>None</option>
                <option value="High"> Highest Marks </option>
                <option value="Low"> Lowest Marks </option>

            </select>

            <Statistics total={filteredStudents.length} average={average} />

            <Studentlist students={filteredStudents} />

        </div>
    );
}

export default StudentHome;