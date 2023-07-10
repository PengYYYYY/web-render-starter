import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layout/index';
import Webgl from '../pages/webgl';
import Canvas from '../pages/canvas';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'webgl',
        element: <Webgl />,
        index: true,
      },
      {
        path: 'canvas',
        element: <Canvas />,
      },
    ],
  },
]);

export default router;
