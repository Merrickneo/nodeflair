import React from 'react';
import "./JobCard.css";
import location from "./location.jpeg";

export default function JobCard({ jobDetails, cardClicked }) {
    const selectJob = () => {
        cardClicked(jobDetails);
    }
    return (
        <div className="job-card" onClick={selectJob}>
            <div className="job-logo">
                <img src={`/${jobDetails.Image}`} alt={`${jobDetails.title} Logo`} />
            </div>
            <div className="job-details">
                <div className="company-title">
                    <h3>{jobDetails.Company}</h3>
                    <p style={{ fontWeight: 'bold' }}>{jobDetails.Title}</p>
                </div>
                <div className="posting-location">
                    <p style={{ color: "#1dc769", fontWeight: "bold", marginRight: "10px" }}>{jobDetails.Posting}</p>
                    <div className="location">
                        <img src={location} alt="Location" style={{ height: "10px", width: "10px", marginRight: "5px" }} />
                        <p>{jobDetails.Location}</p>
                    </div>
                </div>

                <hr className="solid"></hr>
                <div className="skills">
                    {jobDetails.Skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
