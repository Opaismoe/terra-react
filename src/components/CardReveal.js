import React from "react";
import { Reveal, Card, List, Icon } from "semantic-ui-react";

const CardReveal = ({ title, listItems, paragraph }) => (
  <>
    <Reveal animated="move down">
      <Reveal.Content as={Card} visible style={style.card}>
        <Card.Content>
        <Card.Header>
          Strategie <Icon name="arrow down" />
        </Card.Header>
          <List divided>
            <List.Item>Briefing</List.Item>
            <List.Item>Doelgroep onderzoek</List.Item>
            <List.Item>Strategie</List.Item>
            <List.Item>Concept</List.Item>
          </List>
        </Card.Content>
      </Reveal.Content>
      <Reveal.Content as={Card} hidden style={{ background: `var(--primary)`, color: `white`}}>
        <Card.Content>
          <Card.Header>
            Strategie <Icon name="arrow down" />
          </Card.Header>
          <p>
            Wat gaan we bereiken? En voor wie? Wat heeft prioriteit? We beginnen met
            het formuleren van heldere doelstellingen. Vanuit deze solide basis
            starten we met concept. Op die manier ontstaat er focus in het
            ontwerpproces.
          </p>
        </Card.Content>
      </Reveal.Content>
    </Reveal>
  </>
);

const style = {
  card: { minHeight: `250px` }
}

export default CardReveal;

// <List divided selection>
// <List.Item>
//   <Label color='red' horizontal>
//     Fruit
//   </Label>
//   Kumquats
// </List.Item>
// <List.Item>
//   <Label color='purple' horizontal>
//     Candy
//   </Label>
//   Ice Cream
// </List.Item>
// <List.Item>
//   <Label color='red' horizontal>
//     Fruit
//   </Label>
//   Orange
// </List.Item>
// <List.Item>
//   <Label horizontal>Dog</Label>
//   Poodle
// </List.Item>
// </List>
