import ReactDOM from 'react-dom/client';
import Page from './components/Page';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageStateProvider } from './contexts/PageStateContext';
import { EpisodesResponseProvider } from './contexts/EpisodesResponseContext';
import { EpisodeResponseProvider } from './contexts/EpisodeResponseContext';

const router = createBrowserRouter([
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
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
