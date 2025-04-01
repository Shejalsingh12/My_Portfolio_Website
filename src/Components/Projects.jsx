import React from 'react';
import ProjectCard from './ProjectCard';

// Import images from assets
import savings from '../assets/savings.jpg'
import voice from '../assets/voice.jpg'
import portfolio from '../assets/portfolio.png'

const Projects = () => {
  return (
    <>
    <section id="Projects">
    <div  className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-8 justify-center">

      <ProjectCard 
          title="CareerGrid" 
          date="February 2025"
          main="Job Portal Website" 
          desc="  A full-stack web application built using the MERN stack to connect job seekers and recruiters. It features JWT-based authentication, job posting, application tracking, and user-friendly job browsing. This project enhanced my expertise in React, Node.js, Express, MongoDB."
          imgSrc={portfolio} 
          // imgSrc={jobportal}
          demoLink={""}
          sourceLink={"https://github.com/Shejalsingh12/Job_Portal_Website"}
        />
        <ProjectCard 
          title="Travel Booking Portal" 
          date="Sept 2024 - Dec 2024" 
          main="Travel Portal Website" 
          desc="It is a web-based platform for booking travel packages, hotels, and tickets. Built with HTML, CSS, JavaScript, PHP, and MySQL, it integrates APIs for payments, maps, and real-time availability, offering a secure and user-friendly experience."
          imgSrc={savings} 
          sourceLink={"https://github.com/Shejalsingh12/travel-portal-website"}
        />
        <ProjectCard 
          title="College Hostel Minisite" 
          date="Dec 2022 - Feb 2023" 
          main="A Smart Hostel Management System" 
          desc="The Hostel Mini-site is a web application for efficient hostel management, offering secure user authentication, advanced search for listings, online booking, and an admin dashboard. It’s built with Django (Python), MySQL, and a responsive frontend using HTML5, CSS3, and JavaScript."
          imgSrc={voice} 
          sourceLink={"https://github.com/Shejalsingh12/hostel_minisite-website"}
        />
        
      </div>
    </div>
    </section>
   </>
  );
};

export default Projects;
