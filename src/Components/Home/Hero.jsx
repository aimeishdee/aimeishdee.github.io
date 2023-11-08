import React from 'react'
import Typewriter from 'typewriter-effect'
import { home } from '../Common/data'

const Hero = () => {
    return (
        <>
            <section className="hero">
                {home.map((val,idx) => (
                    <div className="heroContainer" key={idx}>
                        <h3 className='fontSize' data-aos='fade-right'>{val.text}</h3>
                        <h1>
                            <Typewriter options={
                                                    {strings:[`${val.name}`, `${val.post}`, `${val.design}`],
                                                        autoStart:true,
                                                        loop:true,
                                                }} />
                        </h1>
                        <p data-aos='fade-left'>{val.desc}</p>
                        <a href="https://drive.google.com/u/1/uc?id=1NWWp2JgJvJuQ_xx48yhClG0UwguvIZs7&export=download" target="_blank" rel="noreferrer"><button className="primaryBtn" data-aos='fade-up-right'>Download CV</button></a>
                    </div>
                )) }
            </section>
        </>
    )
}

export default Hero