import React from 'react';
import { personalData } from '../../data/personal';
import PhysicalButton from '../ui/PhysicalButton';
import GitHubIcon from '../../assets/icons/GitHubIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';

const Contact = () => {
  return (
    <>
      <h2 className="text-center font-press text-xl md:text-3xl lg:text-4xl uppercase mb-4">
        Get In Touch
      </h2>
      <p className="text-center font-sans text-lg max-w-2xl mx-auto mb-12">
        Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form or send me an email directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        {/* For a real-world application, you would connect this to a service like Netlify Forms or Formspree */}
        <form name="contact" method="POST" data-netlify="true" className="space-y-6">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="font-press text-sm md:text-base uppercase block mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full bg-white p-2 border-4 border-dark shadow-neo-sm focus:outline-none focus:bg-highlight"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-press text-sm md:text-base uppercase block mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              className="w-full bg-white p-2 border-4 border-dark shadow-neo-sm focus:outline-none focus:bg-highlight"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-press text-sm md:text-base uppercase block mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows="5"
              className="w-full bg-white p-4 border-4 border-dark shadow-neo-sm focus:outline-none focus:bg-highlight"
            ></textarea>
          </div>
          <PhysicalButton type="submit" variant="primary" size="p-3 text-sm">
            Send Message
          </PhysicalButton>
        </form>

        {/* Direct Contact Info */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="bg-white border-4 border-dark px-1 py-8  shadow-neo w-full">
            <h3 className="font-press text-base uppercase mb-4">Contact Info</h3>
            <p className="font-sans text-base mb-2 break-all">
              <strong>Email:</strong> {personalData.email}
            </p>
            <p className="font-sans text-base mb-6">
              <strong>Location:</strong> {personalData.location}
            </p>
            <h4 className="font-press text-base uppercase mb-4">Find me on</h4>
            <div className="flex justify-center md:justify-start items-center gap-6">
              <a href={personalData.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><GitHubIcon className="w-8 h-8"/></a>
              <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><LinkedInIcon className="w-8 h-8"/></a>
              <a href={personalData.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><TwitterIcon className="w-8 h-8"/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;