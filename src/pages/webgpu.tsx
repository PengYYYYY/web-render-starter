import { useEffect } from 'react';

const WebGL = () => {
  const initWebGpu = async () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (!navigator.gpu) {
      throw new Error('WebGPU not supported on this browser.');
    }
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      throw new Error('No appropriate GPUAdapter found.');
    }
    const device = await adapter.requestDevice();
    const context = canvas.getContext('webgpu')!;
    const canvasFormat = navigator.gpu.getPreferredCanvasFormat();

    (context as any).configure({
      device: device,
      format: canvasFormat,
    });
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: (context as any).getCurrentTexture().createView(),
          loadOp: 'clear',
          clearValue: { r: 0, g: 0, b: 0.4, a: 1 }, // New line
          storeOp: 'store',
        },
      ],
    });
    pass.end();
    const commandBuffer = encoder.finish();
    device.queue.submit([commandBuffer]);
  };

  useEffect(() => {
    initWebGpu();
  }, []);
  return <canvas width="512" height="512"></canvas>;
};

export default WebGL;
