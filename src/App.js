import './App.css';
import { useState } from 'react';
import JobPostings from "./Components/JobPostings/JobPostings";
import JobDescriptionPanel from './Components/JobDescriptionPanel/JobDescriptionPanel';

function App() {
    const [selectedJob, setSelectedJob] = useState(null);

    const handleJobCardClick = (job) => {
        setSelectedJob(job);
    }
    
  return (
    <div className="main-content">
        <JobPostings cardClick={handleJobCardClick}/>
        <JobDescriptionPanel className="jobDescriptionPanel" selectedJob= {selectedJob}/>
    </div>
  );
}

export default App;
