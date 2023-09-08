import React from "react";
import Container from '@material-ui/core/Container';
import cryptoview from '../components/Videos/cryptoview.mp4';
import pokeshop from '../components/Videos/pokeshop.mp4';
import weatherapp from '../components/Videos/weatherapp.mp4';
import todoapp from '../components/Videos/todoapp.mp4';
import '../components/Projects.css';



function Projects(){
    return(
        <section id="projects" className='all-projects'>
            <Container maxWidth='md'>
            <h1 className="my-projects">My Projects</h1>
            </Container>
            <Container maxWidth='md' className="other">
            
            
        
                <div className="project1">
                    
                    
                    <video src={cryptoview} autoPlay className="video1" controls></video>
                    <h2 className="project1-title">CryptoView</h2>
                    
                    <p className='project1-description'>Used React, JSX and RapidAPI to create a web application 
                    that shows all of the cryptocurrencies and all the statistics and trends that are
                     available to it right now, as well as news regarding the cryptocurrency.
                    </p>
                    <a href="https://github.com/MNaeem345/weather-app" target="_blank"><button className="github-button" ><i class= "fa-brands fa-github" swapOpacity></i></button></a>

                </div>
            
            
                <div className="project2">
                    
                    
                    <video src={pokeshop} autoPlay className="video1" controls></video>
                    <h2 className="project2-title">PokeShop</h2>
                    
                    <p className='project2-description'>Designed a multi-page web application using React, 
                    Bootstrap, and CSS for the Front-End and PostgreSQL and Flask for the Back-End, to utilize
                     a Pokemon API where the user can add, or remove a Pokemon to and from their cart which can
                      then be viewed on their profile.
                    </p>
                    <a href="https://github.com/MNaeem345/React-Poke-Shopping-Cart/tree/main/react-poke-shopping-cart" target="_blank"><button className="github-button" ><i class= "fa-brands fa-github" swapOpacity></i></button></a>

                </div>
            
                <div className="project3">
                    
                    
                    <video src={weatherapp} autoPlay className="video3" controls></video>
                    <h2 className="project3-title">Weather App</h2>
                    
                    <p className='project3-description'>Utilizing React, Tailwind, JavaScript, and an OpenWeather
                     API to create a Weather App that gives the weather for locations and can provide the weather 
                     of a user's location.
                    </p>
                    <a href="https://github.com/MNaeem345/weather-app" target="_blank"><button className="github-button" ><i class= "fa-brands fa-github" swapOpacity></i></button></a>

                </div>

                <div className="project4">
                    
                    
                    <video src={todoapp} autoPlay className="video4" controls></video>
                    <h2 className="project4-title">React to-do-list</h2>
                    
                    <p className='project4-description'>Created a ToDo list application with React and CSS
                     that can add, remove, update and check off a list.
                    </p>
                    <a href="https://github.com/MNaeem345/To-do-React-App" target="_blank"><button className="github-button" ><i class= "fa-brands fa-github" swapOpacity></i></button></a>

                </div>
            
            
            
      

        </Container>
        </section>
    )
}


export default Projects;