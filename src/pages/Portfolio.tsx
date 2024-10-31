import React from 'react';

export default function Portfolio() {
  // Placeholder data for portfolio projects
  const projects = [
    {
      title: 'Project One',
      description: 'A short description of Project One.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'A short description of Project Two.',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A short description of Project Three.',
      link: '#',
    },
    {
      title: 'Project Four',
      description: 'A short description of Project Four.',
      link: '#',
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
