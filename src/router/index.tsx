import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/layout/index';
import Webgl from '@/pages/webgl';
import Canvas from '@/pages/canvas';
import Rough from '@/pages/rough';
import CanvasKit from '@/pages/canvas-kit';

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
      {
        path: 'canvasKit',
        element: <CanvasKit />,
      },
    ],
  },
]);

export default router;
