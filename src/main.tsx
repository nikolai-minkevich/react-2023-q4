import ReactDOM from 'react-dom/client';
import Page from './components/Page';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageStateProvider } from './contexts/PageStateContext';
import { EpisodesResponseProvider } from './contexts/EpisodesResponseContext';
import { EpisodeResponseProvider } from './contexts/EpisodeResponseContext';
import NotFound from './components/NotFound';
import { store } from './store';
import { Provider } from 'react-redux';

export const routerConfig = [
  {
    path: '/',
    element: (
      <PageStateProvider>
        <EpisodesResponseProvider>
          <EpisodeResponseProvider>
            <Page />
          </EpisodeResponseProvider>
        </EpisodesResponseProvider>
      </PageStateProvider>
    ),
    errorElement: <NotFound />,
  },
];

const router = createBrowserRouter(routerConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
