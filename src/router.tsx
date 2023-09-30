import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';

const router = createBrowserRouter([
  {
    path: '/services',
    element: <Services />,
  },
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
