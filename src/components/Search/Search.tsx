import React, { ChangeEvent } from 'react';
import './Search.css';

type SearchProps = {
  placeholder: string;
  searchAction: (term: string) => void;
};

type SearchState = {
  term: string;
};

class Search extends React.Component<SearchProps, SearchState> {
  state: SearchState = {
    term: '',
  };

  changeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      term: event.target.value,
    });
  };

  onSearch = (): void => {
    localStorage.setItem('term', this.state.term);
    this.props.searchAction(this.state.term);
  };

  componentDidMount(): void {
    // const term = localStorage.getItem("term");
    // if (term) {
    //   this.setState({
    //     term: term
    //   }, () => this.onSearch());
    // }
  }

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
