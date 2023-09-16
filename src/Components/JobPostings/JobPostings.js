// JobPostings.js
import React from 'react';
import "./JobPostings.css";
import JobCard from './JobCard/JobCard';

const JobPostings = ({cardClick}) => {
    const jobList = [
        {
            Company: "Govtech",
            Title: "Technical Product Manager (Cloud)",
            Location: "Singapore",
            Type: "PM",
            Skills: ["play", "IAM"],
            Rating: "4",
            Image: "assets/govtech.png",
            Posting: "less than a minute ago"
        },
        {
            Company: "Coupang",
            Title: "Staff, Back-end Engineer",
            Location: "Singapore",
            Type: "Backend",
            Skills: ["Rest API", "API", "play", "Modular", "Node.js"],
            Rating: "3.9",
            Image: "assets/coupang.png",
            Posting: "37 minutes ago",
            Salary: "S$12,500 - S$20,250 / mth"
        },
        {
            Company: "Embed",
            Title: "Senior Software Engineer(.Net)",
            Location: "Singapore",
            Type: "Fullstack",
            Rating: "3.5",
            Image: "assets/embed.png",
            Skills: ["Rest API", "Docker", "API", "TDD", "Javascript"],
            Posting: "about 1 hour ago"
        },
        {
            Company: "Circles.Life",
            Title: "Principal Engineer, Cloud",
            Location: "Singapore",
            Type: "Fullstack",
            Rating: "3",
            Image: "assets/circles.png",
            Skills: ["Rest API", "Docker", "Cloud", "AWS"],
            Posting: "about 3 days ago"
        },
    ]

    return (
        <div className="scrollable-panel
                         job-postings">
          <div>
            {jobList.map((job) => (
              <JobCard jobDetails={job}
              cardClicked={cardClick}/>
            ))}
          </div>
        </div>
      );
    };

export default JobPostings;
