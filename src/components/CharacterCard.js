import React from "react";
import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";

const CharacterCard = ({ character }) => {
  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          <span className="date">
            {character.species} {character.status}
          </span>
        </Card.Meta>
        <Card.Description>
          Location: {character.location.name} <br />
          Origin: {character.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes
        </a>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;

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


