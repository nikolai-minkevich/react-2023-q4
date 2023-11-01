import React from 'react';
import './Content.css';
import Card from '../Card';
import ICard from '../../interfaces/ICard';
import Loader from '../Loader';

type ContentProps = {
  cards: ICard[] | null;
};

class Content extends React.Component<ContentProps> {
  render() {
    if (!this.props.cards) {
      return (
        <div className="content">
          <Loader></Loader>
        </div>
      );
    }

    if (this.props.cards.length === 0) {
      return <div className="content">No data found for this search query</div>;
    }

    return (
      <div className="content">
        {this.props.cards.map((card, index) => (
          <Card
            title={card.title}
            opening_crawl={card.opening_crawl}
            key={index}
          ></Card>
        ))}
      </div>
    );
  }
}

export default Content;
