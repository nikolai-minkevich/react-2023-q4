import Nav from '../Nav';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import './Page.css';
import React from 'react';
import ICard from '../../interfaces/ICard';
import fetchAll from '../../services/swapi';

type PageState = {
  cards: ICard[] | null;
};

class Page extends React.Component<Record<string, never>, PageState> {
  state: PageState = {
    cards: null,
  };

  controller = new AbortController();

  async componentDidMount(): Promise<void> {
    const term = localStorage.getItem('term');
    await this.fetchItems(term);
  }

  componentWillUnmount(): void {
    this.controller.abort();
  }

  fetchItems = async (term: string | null): Promise<void> => {
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
        <ErrorBoundary
          fallback={
            <p>
              {' '}
              🥳 Don't worry! It is just an example of error handling by the{' '}
              <strong>ErrorBoundary</strong> component. Refresh page for
              continue.
            </p>
          }
        >
          <div className="page">
            <Nav searchAction={this.fetchItems}></Nav>

            <Content cards={this.state.cards}></Content>
          </div>
        </ErrorBoundary>
      </>
    );
  }
}

export default Page;
