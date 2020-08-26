import React from "react";
import { Reveal, Card, List, Icon } from "semantic-ui-react";

const CardReveal = ({ title, listItems = [], paragraph }) => (
  <>
    <Reveal as={Card} animated="move down">
      <Reveal.Content visible style={style.card}>
        <Card.Content style={{ zIndex: `1 !important`,  }}>
        <Card.Header>
          {title} <Icon name="arrow down" />
        </Card.Header>
          <List divided>
          {listItems.map(item => (
            <List.Item>{item}</List.Item>
          ))}
          </List>
        </Card.Content>
      </Reveal.Content>

      <Reveal.Content as={Card} hidden style={{ background: `var(--primary)`, color: `white`}}>
        <Card.Content>
          <Card.Header>
            {title} <Icon name="arrow down" />
          </Card.Header>
          <p>
            {paragraph}
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
