import React from 'react';
import { skillsData } from '../../data/skills';
import SkillCard from '../ui/SkillCard';

// This component is now much cleaner. It focuses only on its own content.
const Skills = () => {
  return (
    <>
      <h2 className="text-center font-press text-2xl md:text-3xl lg:text-4xl uppercase mb-16">
        My Tech Stack
      </h2>
      
      <div className="space-y-16">
        {skillsData.map((category, index) => (
          <div key={index}>
            <h3 className="font-press text-lg md:text-2xl uppercase text-center mb-8">
              <span className="bg-highlight py-2 px-4 border-2 border-dark shadow-neo-sm inline-block">
                {category.category}
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard 
                  key={skillIndex} 
                  name={skill.name}
                  logoSrc={skill.icon} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;