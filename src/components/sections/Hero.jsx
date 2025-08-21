import { useState } from "react";
import { personalData } from "../../data/personal";
import PhysicalButton from "../ui/PhysicalButton";
import GitHubIcon from "../../assets/icons/GitHubIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
const Hero = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const nameParts = personalData.name.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts.slice(-1).join(" ");
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center p-5 relative overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 opacity-50 z-0">
        <div className="hidden md:block absolute top-[15%] left-[10%] w-16 h-16 bg-primary rotate-45"></div>
        <div className="absolute top-[20%] right-[12%] w-12 h-12 bg-secondary rounded-full"></div>
        <div className="absolute bottom-[15%] left-[12%] w-20 h-20 bg-accent"></div>
        <div className="hidden md:block absolute bottom-[20%] right-[10%] w-14 h-14 bg-highlight rotate-45"></div>
      </div>
      <div className="relative z-10">
        <h1 className="font-press text-2xl sm:text-4xl lg:text-5xl leading-none uppercase mb-5">
          <span>{firstName}</span>
          <span className="block">{lastName}</span>
        </h1>
        <h2 className="font-press text-primary text-sm md:text-3xl uppercase mb-5">
          {personalData.role}
        </h2>
        <p className="font-sans text-lg max-w-2xl mx-auto mb-6">
          {personalData.tagline}
        </p>

        <button
          onClick={() => setIsAboutVisible(!isAboutVisible)}
          className="bg-highlight text-dark py-2 px-4 font-press text-xs uppercase border-4 border-dark shadow-neo-sm mb-10 transition-transform hover:scale-105"
        >
          {isAboutVisible ? "▲ Show Less" : "▼ Read More About Me"}
        </button>

        <div className="flex flex-wrap justify-center items-center gap-5">
          <PhysicalButton href="#projects" variant="secondary" size="p-4">
            View My Work
          </PhysicalButton>
          <PhysicalButton
            href={`mailto:${personalData.email}`}
            variant="primary"
            size="p-4"
          >
            Hire Me Now
          </PhysicalButton>
        </div>

        <div
          className={`
      transition-all duration-500 ease-in-out overflow-hidden
      ${isAboutVisible ? "max-h-[1000px] mt-12" : "max-h-0 mt-0"}
    `}
        >
          <div className="bg-white border-4 border-dark shadow-neo p-8 max-w-3xl mx-auto text-left">
            <p className="font-sans text-base mb-6">{personalData.about}</p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {/* --- UPDATED INFO BLOCK --- */}
              <div className="font-sans text-sm space-y-1">
                <p>
                  <strong>Age:</strong> {personalData.age}
                </p>
                <p>
                  <strong>Education:</strong> {personalData.education}
                </p>
                <p>
                  <strong>Location:</strong> {personalData.location}
                </p>
                <p>
                  <strong>Response Time:</strong> {personalData.responseTime}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={personalData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={personalData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={personalData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
