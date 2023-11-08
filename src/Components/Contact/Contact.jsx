import React from 'react'
import Heading from '../Common/Heading'
import { contact } from '../Common/data'
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        from_mail: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_g0nd4l1',
            'template_pilu0ci',
            toSend,
            'nn93zhMDLJEjy-a62'
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        };

    return (
        <>
            <div className="contact">
                <div className="container">
                    <Heading title="Contact Me" /> 
                    <div className="content flexsb">
                        <div className="right">
                            <form onSubmit={onSubmit}>
                                <div className="flex">
                                    <input type="text" placeholder='Your Name' name='from_name' value={toSend.from_name} onChange={handleChange} data-aos='flip-left' />
                                    <input type="email" placeholder='Your Email' name='from_mail' value={toSend.from_mail} onChange={handleChange}  data-aos='flip-right'/>
                                </div>
                                <input type="text" placeholder="Subject" name='subject' value={toSend.subject} onChange={handleChange} data-aos='flip-up' />
                                <textarea cols="30" rows="10" name='message' placeholder='Message' value={toSend.message} onChange={handleChange} data-aos='flip-down'></textarea>
                                <button data-aos='zoom-in-up'>Submit</button>
                            </form>
                        </div>
                        <div className="left">
                            {contact.map((val,idx)=>(
                                <div className="box" key={idx} data-aos='zoom-in'>
                                    <i>{val.icon}</i>
                                    <p>{val.text1}</p>
                                    <p>{val.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact