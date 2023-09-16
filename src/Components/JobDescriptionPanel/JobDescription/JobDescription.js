import React from "react";
import "./JobDescription.css";

export default function JobDescription({ jobDetails }) {
    return (
        <h1 style={{fontSize: "30px"}}>{jobDetails.Title}</h1>
    )
}