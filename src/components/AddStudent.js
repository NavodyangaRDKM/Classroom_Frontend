import React, { useState } from "react";

export default function AddStudent() {

    return (
        <div>
            <form className="container">
                <div class="mb-3">
                    <label for="name">Student Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Student Name" />
                </div>
                <div class="mb-3">
                    <label for="name">Age</label>
                    <input type="number" class="form-control" id="age" placeholder="Enter Student Age" />
                </div>
                <div class="mb-3">
                    <label for="gender">Gender</label>
                    <input type="text" class="form-control" id="gender" placeholder="Enter Student Gender" />
                </div>
                <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter Student Address" />
                </div>
            </form>
        </div>
    )
}