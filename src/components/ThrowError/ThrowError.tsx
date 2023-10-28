import React from 'react';
import './ThrowError.css';

type ThrowErrorState = {
  showErrorElement: boolean;
};

class ThrowError extends React.Component<object, ThrowErrorState> {
  state: ThrowErrorState = {
    showErrorElement: false,
  };

  onClick = (): void => {
    this.setState({
      showErrorElement: true,
    });
  };

  // type 'any' here is only for demonstrate how ErrorBoundary will handle an error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  test: any;

  render() {
    if (this.state.showErrorElement) {
      return (
        <>
          <div>{this.test.data}</div>
        </>
      );
    }
    return (
      <div className="throw-error">
        <button className="throw-error__button" onClick={this.onClick}>
          Throw an error
        </button>
      </div>
    );
  }
}

export default ThrowError;
