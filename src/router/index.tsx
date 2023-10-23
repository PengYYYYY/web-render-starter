import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/layout/index';
import Webgl from '@/pages/webgl';
import Canvas from '@/pages/canvas';
import CanvasKit from '@/pages/canvas-kit';
import WebGpu from '@/pages/webgpu';
import Svg from '@/pages/svg';

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
        path: 'canvasKit',
        element: <CanvasKit />,
      },
      {
        path: 'webgpu',
        element: <WebGpu />,
      },
      {
        path: 'svg',
        element: <Svg />,
      },
    ],
  },
]);

export default router;
