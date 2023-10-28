import React from 'react';
import './Search.css';

type SearchProps = {
  message: string;
};
type MyState = {
  count: number;
};
class Search extends React.Component<SearchProps, MyState> {
  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <div className="search">
        <input className="search__input" type="text"></input>
        <button className="search__button">Search</button>
      </div>
    );
  }
}

export default Search;
