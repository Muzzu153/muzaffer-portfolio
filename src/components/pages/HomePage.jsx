import React, { lazy, Suspense } from 'react'
import Hero from '../sections/Hero'
// import Section from '../sections/Section'
// import Skills from '../sections/Skills'
// import Services from '../sections/Services'
// import Projects from '../sections/Projects'
// import Contact from '../sections/Contact'

const Section = lazy(() => import("../sections/Section"))
const Skills = lazy(() => import("../sections/Skills"))
const Services = lazy(() => import("../sections/Services"))
const Contact = lazy(() => import("../sections/Contact"))
const Projects = lazy(() => import("../sections/Projects"))

const HomePage = () => {
    return (
        <div>
            <Hero />

            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>

        </div>
    )
}

export default HomePage