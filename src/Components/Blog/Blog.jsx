import React from 'react'
import { blog } from '../Common/data'
import Heading from '../Common/Heading'

const Blog = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <Heading title="Blog" />
                    <div className="content grid3">
                        {blog.map((val,idx) => {
                            return(
                                <div className="box" key={val.id} data-aos='flip-left'>
                                    <div className="img" data-aos='fade-up'>
                                        <img src={val.cover} alt='' data-aos='fade-down' />
                                    </div>
                                    <div className="text">
                                        <h3 data-aos='fade-right'>{val.title}</h3>
                                        <label data-aos='fade-left'>
                                            BY {val.author} | {val.date}
                                        </label>
                                        <p data-aos='fade-up-right'>{val.desc}</p>
                                    </div>
                                </div>
                            )}
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog