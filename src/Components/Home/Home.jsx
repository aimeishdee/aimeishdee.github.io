import React from 'react'
import About from '../About/About'
import Hero from './Hero'
import Services from '../Services/Services'
import Counter from '../Common/Counter'
import Portfolio from '../Portfolio/Portfolio'
import Testimonials from '../Testimonials/Testimonials'
// import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Counter />
            <Portfolio />
            <Testimonials />
            {/*<Blog />*/}
            <Contact />
        </>
    )
}

export default Home