// "use client"
// import { FC } from 'react';
import Nav from '../Nav';
import CardList from '../CardList';
// import ErrorBoundary from '../ErrorBoundary';
import Pagination from '../Pagination';
import { store } from '../../store';
import { Provider } from 'react-redux';

export type TSearchState = string;

const Page = (): React.JSX.Element => {
  // return (<div>Next</div>)

  return (
    <Provider store={store}>
      <div className="page">
        <Nav></Nav>
        <Pagination />
        <CardList />
      </div>
    </Provider>
  );

  // return (
  //   <>
  //     <ErrorBoundary
  //       fallback={
  //         <p>
  //           🥳 Don't worry! It is just an example of error handling by the{' '}
  //           <strong>ErrorBoundary</strong> component. Refresh page for continue.
  //         </p>
  //       }
  //     >
  //       <div className="page">
  //         <Nav></Nav>
  //         <Pagination />
  //         <CardList />
  //       </div>
  //     </ErrorBoundary>
  //   </>
  // );
};

export default Page;
