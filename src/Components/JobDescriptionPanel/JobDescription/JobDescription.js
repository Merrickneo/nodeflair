import React from "react";
import "./JobDescription.css";

export default function JobDescription({ jobDetails }) {
    return (
        <h1 style={{fontWeight:"bold", fontSize: "40px"}}>{jobDetails.Title}</h1>
    )
}