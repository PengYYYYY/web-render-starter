import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/layout/index';
import Webgl from '@/pages/webgl';
import Canvas from '@/pages/canvas';
import Rough from '@/pages/rough';

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
      {
        path: 'rough',
        element: <Rough />,
      },
    ],
  },
]);

export default router;
