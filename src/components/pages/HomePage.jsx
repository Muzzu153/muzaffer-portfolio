import React from 'react'
import Section from '../sections/Section'
import Skills from '../sections/Skills'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Hero from '../sections/Hero'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Section id="skills" addShapes>
                <Skills />
            </Section>

            <Section id="services" addShapes>
                <Services />
            </Section>

            <Section id="projects" addShapes>
                <Projects />
            </Section>

            <Section id="contact" addShapes>
                <Contact />
            </Section>
        </div>
    )
}

export default HomePage