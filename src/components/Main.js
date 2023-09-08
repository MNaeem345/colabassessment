import React, { useState, useEffect } from 'react';
import '../components/Main.css';
import Container from '@material-ui/core/Container';
import Typed from 'react-typed';




function Main(){
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Hello my name is"
  )
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (index < fullText.length) {
        setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
        }, 150)
        }
    }, [index])



    const [text2, setText2] = useState("")
    const [fullText2, setFullText2] = useState(
        "Mohammed Naeem"
  )
    const [index2, setIndex2] = useState(0)
    useEffect(() => {
        if (index2 < fullText2.length) {
        setTimeout(() => {
            setText2(text2 + fullText2[index2])
            setIndex2(index2 + 1)
        }, 200)
        }
    }, [index2])
    
           

    return (
        <Container maxWidth='md' className='about-component'>
            
            <p className='about-title'>{text}</p>
            <h1 className='first'>{text2}</h1>
            
            <h2 className='second'><Typed 
                strings={["I love developing.",
                        "I love building.",
                        "I love solving problems.",
                        "Welcome!"]}
                typeSpeed = {100}
                backSpeed = {50}
                loop
                
                />
            </h2>
            <p className='about-me'>I am a <span style={{color:'lightyellow'}}>Front-End developer </span> looking to create responsive and eye catching applications that users can find 
                apealing. For the past year and a half, I have been expanding my knowledge of what I learned at <span style={{color: 'lightskyblue'}}>Coding Temple</span> which included tools like <span style={{color: 'lightskyblue'}}>React</span>. Recently I have been able to 
                intern as a <span style={{color:'lightsteelblue'}}>Data Analyst</span> with an M&A firm, Sunfield Advisors. At Sunfield, I was able to expand my knowledge of both Front-End development,
                as well as tools like excel. I was able to work with a team to design a website as a side project. 
            </p>
      

        </Container>
    )
}

export default Main;