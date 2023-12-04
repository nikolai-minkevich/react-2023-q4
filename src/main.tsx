import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OldForm from './routes/old-form';
import { Form } from './routes/new-form';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'old-form',
    element: <OldForm />,
  },
  {
    path: 'new-form',
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
