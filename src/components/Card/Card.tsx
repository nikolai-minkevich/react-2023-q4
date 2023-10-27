import React from 'react';
import './Card.css';

type CardProps = {
  title: string;
  description: string;
};
type MyState = {
  count: number;
};
class Card extends React.Component<CardProps, MyState> {
  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <div>
        {this.props.title} {this.props.description}
      </div>
    );
  }
}

export default Card;
