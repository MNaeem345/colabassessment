import React from "react";
import { Container } from "@material-ui/core";
import '../components/Footer.css';


function Footer(){
    return(
        <Container maxWidth='sm' className="footer">
            <a href="https://github.com/MNaeem345/weather-app" target="_blank"><button className="git-button" ><i class= "fa-brands fa-square-github" swapOpacity></i></button></a>
        </Container>
    )
}

export default Footer;
