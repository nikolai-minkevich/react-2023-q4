import Nav from '../Nav';
import Content from '../Content';
import './Page.css';
import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <Nav message="111"></Nav>

        <Content message="222"></Content>
      </div>
    );
  }
}

export default Page;
