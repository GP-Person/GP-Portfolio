import React from 'react';

export default function Resume() {
  return (
    <div className="container mt-4">
      <h2>Resume</h2>
      
      <section className="mb-4">
        <h3>Experience</h3>
        <ul>
          <li>
            <strong>Job Title at Company Name</strong> - Location, Dates
            <p>Brief description of responsibilities and achievements.</p>
          </li>
          <li>
            <strong>Another Job Title at Another Company</strong> - Location, Dates
            <p>Brief description of responsibilities and achievements.</p>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Degree Title</strong> - Institution Name, Graduation Date
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>Skills</h3>
        <p>List of relevant skills, e.g., JavaScript, React, TypeScript, etc.</p>
      </section>

      <section className="mb-4">
        <h3>Certifications</h3>
        <ul>
          <li>Certification Title - Issuing Organization, Date</li>
        </ul>
      </section>
    </div>
  );
}
