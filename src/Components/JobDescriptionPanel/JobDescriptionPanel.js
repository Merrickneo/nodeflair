import React, { useEffect, useState } from 'react';
import "./JobDescriptionPanel.css";
import JobDescription from './JobDescription/JobDescription';

export default function DescriptionPanel({ selectedJob, onJobCardClick }) {
    const [currentSelectedJob, setCurrentSelectedJob] = useState(null);
    const handleJobCardClick = () => {
        if (onJobCardClick) {
            onJobCardClick(selectedJob);
        }
    }

    useEffect(() => {
        if (selectedJob) {
            setCurrentSelectedJob(selectedJob);
        } else {
            setCurrentSelectedJob(null);
        }
    })


    return (
        <div className="description-panel scrollable-panel">
            {selectedJob ? (
                <JobDescription jobDetails={selectedJob} />
            ) : (
                <p>Click on a job card to see the description</p>
            )}


        </div>
    )
}