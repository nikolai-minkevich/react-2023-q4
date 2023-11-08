import { FC, ChangeEvent, useState } from 'react';
import './Search.css';
import { usePageStateContext } from '../../contexts/usePageStateContext';

const Search: FC = () => {
  const { setTerm } = usePageStateContext();
  const defaultInputValue = localStorage.getItem('term') ?? '';
  const [inputValue, setInputValue] = useState<string>(defaultInputValue);

  const changeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSearch = (): void => {
    localStorage.setItem('term', inputValue);
    setTerm(inputValue);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        defaultValue={inputValue}
        placeholder="Search by title"
        onChange={changeInput}
      />
      <button className="search__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
