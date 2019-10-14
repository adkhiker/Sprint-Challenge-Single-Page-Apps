import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


const Content = styled.div`
width: 100%
max-width: 1200px;
margin: 0 auto 5rem;
@media screen and (max-width: 400px) {margin-top: -2rem;}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
`;
