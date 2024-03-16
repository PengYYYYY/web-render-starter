import { createBrowserRouter } from 'react-router-dom';

import Svg from '@/pages/svg';
import Layout from '@/layout/index';
import Webgl from '@/pages/webgl';
import Canvas from '@/pages/canvas';
import CanvasKit from '@/pages/canvas-kit';
import WebGpu from '@/pages/webgpu/webgpu';
import Matter from '@/pages/matter';
import Pixi from '@/pages/pixi';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'vector',
        element: <Svg />,
        index: true,
      },
      {
        path: 'canvas',
        element: <Canvas />,
      },
      {
        path: 'webgl',
        element: <Webgl />,
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
        path: 'matter',
        element: <Matter />,
      },
      {
        path: 'pixi',
        element: <Pixi />,
      },
    ],
  },
]);

export default router;
