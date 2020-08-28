import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./index.css"

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
        <div class="col-sm-10">
                <div class="body-text">
                  <h1>About</h1>
                </div>
              </div>
        </Row>
      </Container>
    );
  }
}


export default Home;
