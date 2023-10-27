import React from 'react';
import './Content.css';
import Card from '../Card';

type ContentProps = {
  message: string;
};
type MyState = {
  count: number;
};
class Content extends React.Component<ContentProps, MyState> {
  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <div>
        <Card title="Ti" description="desc"></Card>
      </div>
    );
  }
}

export default Content;
