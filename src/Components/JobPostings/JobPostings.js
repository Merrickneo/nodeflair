// JobPostings.js
import React from 'react';
import "./JobPostings.css";
import JobCard from './JobCard/JobCard';

const JobPostings = () => {
    const jobList = [
        {
            Company: "Govtech",
            Title: "Technical Product Manager (Cloud)",
            Location: "Singapore",
            Type: "PM",
            Skills: ["play", "IAM"],
            Image: "assets/govtech.png",
            Posting: "less than a minute ago"
        },
        {
            Company: "Coupang",
            Title: "Staff, Back-end Engineer",
            Location: "Singapore",
            Type: "Backend",
            Skills: ["Rest API", "API", "play", "Modular", "Node.js"],
            Image: "assets/coupang.png",
            Posting: "37 minutes ago",
            Salary: "S$12,500 - S$20,250 / mth"
        },
        {
            Company: "Embed",
            Title: "Senior Software Engineer(.Net)",
            Location: "Singapore",
            Type: "Fullstack",
            Image: "assets/embed.png",
            Skills: ["Rest API", "Docker", "API", "TDD", "Javascript"],
            Posting: "about 1 hour ago"
        },
    ]

    return (
        <div className="scrollable-panel
                         job-postings">
          <div>
            {jobList.map((job) => (
              <JobCard jobDetails={job}/>
            ))}
          </div>
        </div>
      );
    };

export default JobPostings;
