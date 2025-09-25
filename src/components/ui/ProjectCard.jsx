import React from 'react';
import ExternalLinkIcon from '../../assets/icons/ExternalLinkIcon';
import GitHubIcon from '../../assets/icons/GitHubIcon';
import PhysicalButton from './PhysicalButton';

const FeaturedProject = ({ project, index }) => {
  // Destructure all the new properties from your data
  const { title, subtitle, imgSrc, description , features, techStack, color, demoUrl, codeUrl } = project;
  
  const isOdd = index % 2 !== 0;

  // Define classes for alternating layout
  const layoutClasses = isOdd ? 'md:flex-row-reverse' : 'md:flex-row';
  const textAlignClasses = isOdd ? 'md:text-right' : 'md:text-left';
  const itemsAlignClasses = isOdd ? 'md:items-end' : 'md:items-start';
  const tagsJustifyClasses = isOdd ? 'md:justify-end' : 'md:justify-start';

  // This is the key for the dynamic color. We create an inline style object.
  const imageShadowStyle = {
    boxShadow: `10px 10px 0px ${color}`
  };

  return (
    <div className={`flex flex-col ${layoutClasses} gap-8 md:gap-12 items-center mb-20 md:mb-28`}>
      
      {/* Project Image - uses the dynamic shadow color */}
      <div className="w-full md:w-1/2">
        <div 
          className="border-4 border-dark transition-transform duration-300 hover:scale-[1.02]" 
          style={imageShadowStyle}
        >
          {/* Replace this with your actual project image */}
          <img 
            src={imgSrc} 
            alt={`${title} screenshot`} 
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>

      {/* Project Details */}
      <div className={`w-full md:w-1/2 flex flex-col ${itemsAlignClasses} ${textAlignClasses}`}>
        <p className="font-sans text-lg text-primary mb-2">{subtitle}</p>
        <h3 className="font-press text-2xl md:text-3xl uppercase mb-4">{title}</h3>

        <div className={`flex flex-wrap gap-2 mb-6 ${tagsJustifyClasses}`}>
          {techStack.map((tag, i) => (
            <span key={i} className="bg-highlight text-dark py-1 px-3 text-xs uppercase border-2 border-dark">
              {tag}
            </span>
          ))}
        </div>

        <p className="font-sans text-base mb-6">{description}</p>
        
        {/* Features List */}
        <ul className="font-sans text-base list-outside list-disc pl-5 mb-6 space-y-2 feature-list">
          {features.map((feature, i) => ( // Show first 4 features for brevity
            <li key={i}>{feature}</li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <PhysicalButton href={demoUrl} variant="primary" size="p-4">
            <div className="flex items-center gap-2">
              <ExternalLinkIcon />
              <span>Live Demo</span>
            </div>
          </PhysicalButton>
          <PhysicalButton href={codeUrl} variant="secondary" size="p-4">
            <div className="flex items-center gap-2">
              <GitHubIcon />
              <span>View Code</span>
            </div>
          </PhysicalButton>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;