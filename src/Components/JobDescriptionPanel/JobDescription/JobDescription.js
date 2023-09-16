import React from "react";
import "./JobDescription.css";

export default function JobDescription({ jobDetails }) {
    return (
        <div className="job-cards">
            <div className="job-card">
                <h3>{jobDetails.Company}</h3>
                <p>{jobDetails.Title}</p>
                <p>{jobDetails.Posting}</p>
                <p>{jobDetails.Type}</p>
                <hr className="solid"></hr>
                <p>{jobDetails.Skills?.join(", ")}</p>
            </div>
        </div>
    )
}