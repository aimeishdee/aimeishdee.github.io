import React, { Fragment } from 'react'
import { about } from '../Common/data'
import Heading from '../Common/Heading'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="container flex">
                    {about.map((val,idx) => (
                        <Fragment key={idx}>
                            <div className="left img" data-aos='fade-down-right'>
                                <img src={val.cover} alt='' />
                            </div>
                            <div className="right" data-aos='fade-down-left'>
                                <Heading title='About Me' />
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <a href="https://drive.google.com/u/1/uc?id=1NWWp2JgJvJuQ_xx48yhClG0UwguvIZs7&export=download" target="_blank" rel="noreferrer"><button data-aos='fade-up-right'>Download CV</button></a>
                                
                            </div>
                        </Fragment>
                    )) }
                </div>
            </section>
        </>
    )
}

export default About