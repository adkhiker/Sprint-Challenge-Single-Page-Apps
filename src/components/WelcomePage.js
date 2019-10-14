import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}

function CharCard(props) {
  return (
    <Col xs="6" lg="4" height="100%">
      <Card height="100%">
        <CardImg src="https://source.unsplash.com/random" width="100%" top />
        <CardBody height="100%">
          {/*

          */}
          <CardTitle>{props.title}</CardTitle>
          <hr />
          <CardText>{props.description}</CardText>
          <hr />
          <CardText height="100%">Director: {props.director}</CardText>
          <small>Date Released: {props.release_date}</small>
        </CardBody>
      </Card>
    </Col>
  );
}
