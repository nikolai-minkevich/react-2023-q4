import React, { ChangeEvent } from 'react';
import './Search.css';

type SearchProps = {
  placeholder: string;
  searchAction: (term: string) => void;
};
type MyState = {
  term: string;
};
class Search extends React.Component<SearchProps, MyState> {
  state: MyState = {
    term: '',
  };

  changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      term: event.target.value,
    });
  };

  onSearch = () => {
    this.props.searchAction(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.changeInput}
        ></input>
        <button className="search__button" onClick={this.onSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
