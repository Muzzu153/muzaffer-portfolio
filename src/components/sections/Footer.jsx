import React from 'react';
import { personalData } from '../../data/personal';
import GitHubIcon from '../../assets/icons/GitHubIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light border-t-4 border-highlight">
      <div className="max-w-6xl mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-center md:text-left">
            © {currentYear} {personalData.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href={personalData.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><GitHubIcon /></a>
            <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><LinkedInIcon /></a>
            <a href={personalData.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><TwitterIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;