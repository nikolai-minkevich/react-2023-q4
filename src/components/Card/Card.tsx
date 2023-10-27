import React from 'react';
import './Card.css';

type CardProps = {
  name: string;
  description: string;
  image_url: string;
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
      <div className="card">
        <div className="card__section-image">
          <img className="card__image" src={this.props.image_url}></img>
        </div>
        <div className="card__section-about">
          <div className="card__name">{this.props.name}</div>
          <div className="card__description">
            {this.props.description.substring(0, 125)}...
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
