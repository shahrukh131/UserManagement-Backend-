import React, { useState, useEffect } from "react";
import axios from "axios";

export const Index = () => {
    const [tasks, setTasks] = useState([{ name: "", email: "", money: "" }]);

    const getAll = () => {
        axios.get("http://127.0.0.1:8000/api/tasks").then(res => {
            console.log(res.data);
            setTasks(res.data);
        });
    };

    useEffect(() => {
        getAll();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("worked");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={} />
                <input type="text" placeholder="Email" onChange={} />
                <input type="text" placeholder="Money" onChange={} />
                <button className="btn btn-secondary">Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Money</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.name}</td>

                            <td>{task.email}</td>
                            <td>{task.money}</td>
                            <td>
                                <button className="btn btn-primary">
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
