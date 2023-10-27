import React from 'react';
import './Search.css';

type SearchProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class Search extends React.Component<SearchProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div>
        <input type="text"></input>
        <button>Search</button>
      </div>
    );
  }
}

export default Search;
