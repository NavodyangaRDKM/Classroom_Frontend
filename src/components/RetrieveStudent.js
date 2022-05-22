import axios from "axios";
import React, { useState, useEffect } from "react";

export default function RetrieveStudent() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        function getStudent() {
            axios.get("http://localhost:8070/student/").then((res) => {
                setStudents(res.data);
            }).catch((err) => {
                console.log(err.message)
            })
        }
        getStudent();

    }, [])



    return (
        <div className="container">
            <h1>All Students</h1>
        </div>
    )
}