import Nav from '../Nav';
import Content from '../Content';
import './Page.css';
import React from 'react';
import ICard from '../../interfaces/ICard';
import fetchAll from '../../services/punkapi';

type MyState = {
  cards: ICard[];
};

class Page extends React.Component<void, MyState> {
  state: MyState = {
    cards: [],
  };

  async componentDidMount() {
    this.setState({
      cards: await fetchAll(),
    });
  }

  render() {
    if (!this.state?.cards) {
      return <></>;
    }
    return (
      <>
        <div className="page">
          <Nav></Nav>

          <Content cards={this.state.cards}></Content>
        </div>
      </>
    );
  }
}

export default Page;
