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
                                <p>{val.desc2}</p>
                                <a href="https://drive.google.com/file/d/13akOsQgLLjpGsXlleVloM1bZOUQhq426/view?usp=sharing" target="_blank" rel="noreferrer"><button data-aos='fade-up-right'>Download CV</button></a>
                                
                            </div>
                        </Fragment>
                    )) }
                </div>
            </section>
        </>
    )
}

export default About