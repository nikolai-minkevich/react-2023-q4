import React from 'react';
import './Card.css';

type CardProps = {
  title: string;
  opening_crawl: string;
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
        <div className="card__section-about">
          <div className="card__name">{this.props.title}</div>
          <div className="card__description">
            {this.props.opening_crawl.substring(0, 125)}...
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
