import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ProfileCard from "../components/Profilecard"

class Projects extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <ProfileCard/>
        </Row>
        <h1>Projects</h1>
      </Container>
    );
  }
}


export default Projects;