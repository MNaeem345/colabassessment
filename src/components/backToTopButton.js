import React from "react";
import {useEffect, useState} from "react";
import '../components/backToTopButton.css';
function BackToTopButton(){
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp= () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
      
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        
      }

    

    return <div>
        {backToTopButton && (
            <button className="button-scroll" style={{
                position:"fixed",
                bottom: "70px",
                right: "50px",
                height: "70px",
                width: "70px",
                fontSize: "40px",
                cursor: 'pointer',
                borderRadius: "50px",
                backgroundColor:"lightyellow",
                border:"None",
                
            }}
            onClick={scrollUp}
            ><i class= "fa-solid fa-arrow-up" swapOpacity></i></button>
        )}
        {backToTopButton && (
            <button className="button-scroll" style={{
                position:"fixed",
                bottom: "70px",
                right: "150px",
                height: "70px",
                width: "70px",
                fontSize: "40px",
                cursor: 'pointer',
                borderRadius: "50px",
                backgroundColor:"lightyellow",
                border:"None",
                
            }}
            onClick={() => scrollToSection('contact')}
            ><i class= "fa-solid fa-arrow-down" swapOpacity></i></button>
        )}
        


    </div>
}

export default BackToTopButton;