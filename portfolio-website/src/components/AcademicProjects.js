import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import '../styles.css';

const AcademicProjects = () => {
  return (
    <Zoom>
      <section id="academic-projects" className="projects-container">
        <h2 className="projects-title">Academic Projects & Education</h2>

        <div className="project">
          <div className="project-content">
            <h3 className="project-title">Course Registration System</h3>
            <p className="project-description">Developed a Python Django application to help students register for courses, emphasizing a user-centric design approach to enhance the user experience and streamline the registration process.</p>
          </div>
        </div>

        <div className="project">
          <div className="project-content">
            <h3 className="project-title">Patient Medication Reminder</h3>
            <p className="project-description">Created a web application using HTML, CSS, JavaScript, and Bootstrap to send medication reminders, focusing on user-friendly design, ease of use, and accessibility.</p>
          </div>
        </div>

        <div className="education">
          <h3 className="education-title">Education</h3>
          <ul className="education-list">
            <li>Master’s in Computer and Information Science, Southern Arkansas University</li>
            <li>B. Tech in Computer Science and Engineering, Sasi Institute of Technology and Engineering, India</li>
          </ul>
        </div>
      </section>
    </Zoom>
  );
};

export default AcademicProjects;
