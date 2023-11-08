import React, { Fragment } from 'react'
import { social } from './data'

const Footer = () => {
    return (
        <>
            <footer>
                {social.map((item,idx) => (
                    <Fragment key={idx}>
                    <a href={item.link} target="_blank" rel="noreferrer"><i data-aos='fade-down-right'>{item.icon}</i></a>
                    </Fragment>
                ))}
                <p data-aos='fade-down-right'>All Right Resceved © 2022</p>
            </footer>
        </>
    )
}

export default Footer