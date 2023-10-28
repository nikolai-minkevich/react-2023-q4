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
    await this.fetchItems();
  }

  fetchItems = async (term: string | void) => {
    this.setState({
      cards: await fetchAll(term),
    });
  };

  render() {
    return (
      <>
        <div className="page">
          <Nav searchAction={this.fetchItems}></Nav>

          <Content cards={this.state.cards}></Content>
        </div>
      </>
    );
  }
}

export default Page;
