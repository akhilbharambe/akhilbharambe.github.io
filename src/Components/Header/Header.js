import React, { useState } from "react";
import "./header.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from "react-scroll"
import Button from "react-bootstrap/Button";
import resume from "../resume/akhil_resume.pdf"

function Header() {
  
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/18PJuXLQYEzQygfAzwmKBm0zk5VFaKEYv/view?usp=sharing","_blank"
    );
    

    
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'akhil_resume.pdf'; 
    link.click();
  }


  window.addEventListener("scroll", scrollHandler);
  const  x = window.matchMedia("(max-width:1000px)")

  function rel(x) {
    if (x.matches) { 
      let a= document.getElementById("tgl");
      a.click();
    } 
  }
  

  return (
    <Navbar
      id="nav-menu"
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        <Navbar.Toggle id="tgl"
          aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-auto" defaultActiveKey="#home">

          <Nav.Item  id="home" className="fork-btn">
          <Link to="home">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Home
          </Button>
          </Link>
          </Nav.Item>

           <Nav.Item  itemID="about" className="fork-btn">
          <Link to="about">
          <Button onClick={()=>{rel(x)}} 
                target="_blank"
                className="fork-btn-inner"
              >
                About
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn" itemID="skills">
          <Link  to="skills">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Skills
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item itemID="projects" className="fork-btn">
          <Link to="projects">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Projects
          </Button>
          </Link>
          </Nav.Item>

         


          <Nav.Item itemID="contact" className="fork-btn">
          <Link to="contact">
          <Button onClick={rel}
                target="_blank"
                className="fork-btn-inner"
              >
                Contact
          </Button>
          </Link>
          </Nav.Item>

         

            
            <Nav.Item itemID="resume" className="fork-btn">
            <Button
                onClick={handleDownload}
               rel="noreferrer"
                className="fork-btn-inner"
                 
              >
                Resume
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;