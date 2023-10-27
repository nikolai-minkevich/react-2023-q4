import React from 'react';
import './Content.css';
import Card from '../Card';
import ICard from '../../interfaces/ICard';
import Loader from '../Loader';

type ContentProps = {
  cards: ICard[];
};
type MyState = {
  count: number;
};

class Content extends React.Component<ContentProps, MyState> {
  state: MyState = {
    count: 0,
  };

  render() {
    if (!this.props.cards || this.props.cards.length === 0) {
      return <Loader></Loader>;
    }

    return (
      <div>
        {this.props.cards.map((card) => (
          <Card
            name={card.name}
            description={card.description}
            image_url={card.image_url}
          ></Card>
        ))}
      </div>
    );
  }
}

export default Content;
