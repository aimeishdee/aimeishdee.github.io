import React, { useState } from 'react'
import {portfolio} from '../Common/data'
import VisibilityOutlinedIcon  from '@mui/icons-material/VisibilityOutlined'
import Heading from '../Common/Heading'


const Portfolio = () => {

    const [list, setList] = useState(portfolio)
    // const [category, setCategory] = useState(allCategories)
    // console.log(setCategory);
    const filterItems = (category) =>{
        const newCategory = portfolio.filter((item)=>item.category === category)
        setList(newCategory)

    }

    return (
        <>
            <article>
                <div className="container">
                    <Heading title='Portfolio' />
                    <div className="catButton">

                    </div>
                    <div className="content grid3">
                        {list.map((val,idx) =>(
                            <div className="box" key={idx} data-aos='fade-up'>
                                <div className="img">
                                    <img src={val.cover} alt='' />
                                </div>
                                <div className="overlay">
                                    <h3>{val.title}</h3>
                                    <span>{val.name}</span>
                                    <span className="visit"><a href={val.link} target="_blank" rel="noreferrer"><VisibilityOutlinedIcon /></a></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Portfolio