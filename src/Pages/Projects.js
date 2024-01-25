import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import hiling from "../Assets/hiling-travel-agency.jpg"
import expense from "../Assets/expense.jpg"
import quizz from "../Assets/quizz.jpg"
import tic from "../Assets/tic-tac.jpg"

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
            img={expense}
              title="Expense Tracker"
              description="Introducing our Expense Tracker app – your ultimate companion in financial management! Seamlessly designed to empower you in tracking and managing your expenses effortlessly, this app combines user-friendly interfaces with powerful features."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | ReactJS  "
              link="https://expense-tracker-omega-puce.vercel.app/"
              a="https://github.com/akhilbharambe/expense_tracker"
            />
          </Col>
        <Col md={6} className="project-card" >
            <ProjectCards
              img={hiling}
              title="Hiling Travel agency"
              description="Hilling Travel Agency is committed to providing exceptional travel experiences. Our website is designed to help travelers explore exciting destinations, find the best travel packages, and plan their dream vacations."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | ReactJS  "
              link="https://travel-agency-sooty.vercel.app/"
              a="https://github.com/rishabhkatroliya/travel-agency"
            />
          </Col>
          <Col md={6} className="project-card" >
            <ProjectCards
              img={tic}
              title="Tic Tac Toe"
              description=" Tic-Tac-Toe reimagined for the digital era. Enjoy the timeless thrill of Xs and Os in a sleek and intuitive interface. Challenge your friends or take on the AI in a battle of strategy and wits. With its easy-to-learn gameplay and vibrant visuals, T3 Challenge is the perfect way to relive the nostalgia of a childhood favorite or introduce a new generation to the joys of Tic-Tac-Toe."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css   "
              link=" https://649ed83dad3e52109665e5f9--moonlit-kitsune-a613b0.netlify.app/"
              a="https://github.com/akhilbharambe/Tic-Tac-Toe_game"
            />
          </Col>
          <Col md={6} className="project-card" >
            <ProjectCards
              img={quizz}
              title="Quizz App"
              description="QuizMaster Pro is your go-to quiz app for a thrilling challenge that spans the worlds of sports and politics. Test your knowledge on the latest sports events, iconic athletes, and political happenings from around the globe. With a user-friendly interface and a diverse range of thought-provoking questions, QuizMaster Pro offers an engaging experience for trivia enthusiasts and curious minds alike."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | ReactJS  "
              link="https://quizz-app-cfau.vercel.app/"
              a="https://github.com/akhilbharambe/quizz_app"
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
