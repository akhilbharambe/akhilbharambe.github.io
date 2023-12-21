import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";
import "./projectcards.css"

function ProjectCards({title,description,tech,techD,link,a}) {
  return (
    <Card className="project-card-view">
     
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Card.Title>{tech}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {techD}
        </Card.Text>
        <Button variant="primary" href={link} target="_blank">
          <BiLinkExternal /> &nbsp;
        </Button>
        &nbsp;
        &nbsp;
        <Button variant="primary" href={a} target="_blank">
          <AiFillGithub /> &nbsp;
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;