import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

export default router;
