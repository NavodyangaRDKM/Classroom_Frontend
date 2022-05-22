import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");

    function sentData() {

        const newStudent = {
            name,
            age,
            gender,
            address
        }
        axios.post("http://localhost:8070/student/add", newStudent).then(() => {
            alert("Student Added");

        }).catch((err) => {
            console(err);
        })
    }

    return (
        <div>
            <h1 className="container">
                Add the Student
            </h1><br />
            <form className="container">

                <div className="mb-3">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Student Name"
                        onChange={(e) => {
                            setName(e.target.value)
                        }} />
                </div>
                <div className="mb-3">
                    <label for="age">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter Student Age"
                        onChange={(e) => {
                            setAge(e.target.value)
                        }} />
                </div>
                <div className="mb-3">
                    <label for="gender">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
                        onChange={(e) => {
                            setGender(e.target.value)
                        }} />
                </div>
                <div className="mb-3">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Student Address"
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }} />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={sentData}>Submit</button>
            </form>
        </div>
    )
}