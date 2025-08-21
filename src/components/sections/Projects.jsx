import React from 'react';
import { projectsData } from '../../data/projects';
import FeaturedProject from '../ui/ProjectCard';

const Projects = () => {
  return (
    <>
      <h2 className="text-center font-press text-2xl md:text-3xl  lg:text-4xl uppercase mb-16">
        Featured Projects
      </h2>
      
      <div>
        {projectsData.map((project, index) => (
          <FeaturedProject key={index} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default Projects;