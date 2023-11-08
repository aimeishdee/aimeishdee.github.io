import React from 'react'
import { project } from './data'
import CountUp from 'react-countup'

const Counter = () => {
    return (
        <>
            <div className="hero counter">
                <div className="container grid3 grid4 ">
                    {project.map((val,idx)=>(
                        <div className="box" key={idx} data-aos='zoom-in'>
                            <i>{val.icon}</i>
                            <h1 className="heading">
                                <CountUp enableScrollSpy duration={2} end={val.num} />
                            </h1>
                            <p>{val.title}</p>
                        </div>                   
                    ))}
                </div>
            </div>
        </>
    )
}

export default Counter
