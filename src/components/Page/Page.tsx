import Nav from '../Nav';
import Content from '../Content';
import './Page.css';
import React from 'react';
import ICard from '../../interfaces/ICard';

const cards: ICard[] = [{ title: '131', description: '22' }];

class Page extends React.Component {
  render() {
    return (
      <>
        <div className="page">
          <Nav message="111"></Nav>

          <Content cards={cards}></Content>
        </div>
      </>
    );
  }
}

export default Page;
