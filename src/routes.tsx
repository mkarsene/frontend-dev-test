import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, Layout } from './components';
import { ThresholdManagemnt, UserManagement, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'manage-thresholds', element: <ThresholdManagemnt /> },
      { path: 'manage-users', element: <UserManagement /> },
    ],
  },
]);

export default router;
