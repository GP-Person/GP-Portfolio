//import React from 'react';
import resumePDF from '../assets/resume.pdf';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <a href={resumePDF} download="Garrett_Pearson_Resume.pdf" className="btn btn-primary">
          Download My Resume
        </a>
    </div>
  );
}
