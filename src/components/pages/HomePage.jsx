import React, { lazy, Suspense } from 'react'
import Hero from '../sections/Hero'

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