import React from "react";
import '../components/Contact.css';
import { Container } from "@material-ui/core";


function Contact(){
    return(
        <section id="contact">
            <Container maxWidth='md' className='about-component'>
            <h1 className='first'>Contact Me</h1>
            
            
            <p className='about-me'>I am a <span style={{color:'lightyellow'}}>Front-End developer </span> looking to create responsive and eye catching applications that users can find 
                apealing. For the past year and a half, I have been expanding my knowledge of what I learned at <span style={{color: 'lightskyblue'}}>Coding Temple</span> which included tools like <span style={{color: 'lightskyblue'}}>React</span>. Recently I have been able to 
                intern as a <span style={{color:'lightsteelblue'}}>Data Analyst</span> with an M&A firm, Sunfield Advisors. At Sunfield, I was able to expand my knowledge of both Front-End development,
                as well as tools like excel. I was able to work with a team to design a website as a side project. 
            </p>
      

        </Container>
        </section>
    )
}


export default Contact;