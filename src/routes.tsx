import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, Home, Layout } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
