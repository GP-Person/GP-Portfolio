import React from 'react';
import weatherImage from '../assets/weather.png';
import mapsImage from '../assets/maps.png';
import vehiclesImage from '../assets/vehicles.png';
import employeesImage from '../assets/employees.png';

export default function Portfolio() {
  // Placeholder data for portfolio projects
  const projects = [
    {
      title: 'Vehicle Builder',
      description: 'This is a Vehicle Building program that runs on the Command Line using npm packages such as "inquirer" and "typescript"',
      link: 'https://github.com/GP-Person/VehicleBuilder',
      image: vehiclesImage,
    },
    {
      title: 'OpenWeather Weather Dashboard',
      description: 'This web application uses an API call to OpenWeather API to display a 5-day forecast for any city in the world.',
      link: 'https://github.com/GP-Person/Weather-Dashboard',
      deployedlink: "https://weather-dashboard-paxv.onrender.com/",
      image: weatherImage,
    },
    {
      title: 'Employee Manager',
      description: 'A command-line application built to manage a company\'s employee database using PostgreSQL. This tool allows users to view and manage departments, roles, and employees with ease.',
      link: 'https://github.com/GP-Person/EmployeeManager',
      image: employeesImage,
    },
    {
      title: 'Resilience Maps App',
      description: 'This Full-Stack application utilizing PERN (Postgres, Express.js, React, and Node.js) allows users to login and view their local Resilience health facilities on a Google Map API.',
      link: 'https://github.com/GP-Person/Resilience-Office-Map',
      deployedlink: 'https://resilience-office-map.onrender.com/',
      image: mapsImage,
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
                
                {/* Conditionally render the image if it exists */}
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`} 
                    style={{ width: '50%', maxHeight: '150px', objectFit: 'cover' }} 
                    className="mb-3"
                  />
                )}

                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                 <div> View Project </div>
                </a>

                {/* Render deployed link only if it exists */}
                {project.deployedlink && (
                  <div className="mt-2">
                    <a href={project.deployedlink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                     <div> View Deployed Project</div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
