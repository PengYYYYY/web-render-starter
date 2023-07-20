import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/layout/index';
import Webgl from '@/pages/webgl';
import Canvas from '@/pages/canvas';
import Rough from '@/pages/rough';
import CanvasKit from '@/pages/canvas-kit';
import WebGpu from '@/pages/webgpu';

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
      {
        path: 'webgpu',
        element: <WebGpu />,
      },
    ],
  },
]);

export default router;
