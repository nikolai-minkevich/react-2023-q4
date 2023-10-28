import Nav from '../Nav';
import Content from '../Content';
import './Page.css';
import React from 'react';
import ICard from '../../interfaces/ICard';
import fetchAll from '../../services/swapi';

type PageState = {
  cards: ICard[] | null;
};

class Page extends React.Component<null, PageState> {
  state: PageState = {
    cards: null,
  };

  controller = new AbortController();

  async componentDidMount(): Promise<void> {
    await this.fetchItems();
  }

  componentWillUnmount(): void {
    this.controller.abort();
  }

  fetchItems = async (term: string | void): Promise<void> => {
    this.setState({
      cards: null,
    });
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
