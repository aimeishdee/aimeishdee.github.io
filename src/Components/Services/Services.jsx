import React from 'react'
import { services } from '../Common/data'
import Heading from '../Common/Heading'

const Services = () => {
    return (
        <>
            <section className="services">
                <div className="container">
                    <Heading title="Services" />
                    <div className="content grid3">
                        {services.map((val,idx)=> (
                            <div className="box" key={idx} data-aos='flip-left'>
                                <i>{val.icon}</i>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services