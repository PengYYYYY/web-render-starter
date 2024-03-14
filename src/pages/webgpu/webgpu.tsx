import { useEffect } from 'react';
import triangleVertWGSL from './shaders/triangle.vert.wgsl?raw';
import redFragWGSL from './shaders/red.frag.wgsl?raw';

const WebGL = () => {
  const initWebGpu = async () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (!navigator.gpu) {
      throw new Error('WebGPU not supported on this browser.');
    }

    // 适配器
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      throw new Error('No appropriate GPUAdapter found.');
    }

    // 获取设备
    const device = await adapter.requestDevice();

    // 画布
    const context: GPUCanvasContext = canvas.getContext('webgpu') as GPUCanvasContext;

    const devicePixelRatio = window.devicePixelRatio;
    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;

    const presentationFormat = navigator.gpu.getPreferredCanvasFormat();

    context.configure({
      device,
      format: presentationFormat,
      alphaMode: 'premultiplied',
    });

    const pipeline = device.createRenderPipeline({
      layout: 'auto',
      vertex: {
        module: device.createShaderModule({ code: triangleVertWGSL }),
      },
      fragment: {
        module: device.createShaderModule({ code: redFragWGSL }),
        targets: [{ format: presentationFormat }],
      },
      primitive: {
        topology: 'triangle-list',
      },
    });

    function frame() {
      const commandEncoder = device.createCommandEncoder();
      const textureView = context.getCurrentTexture().createView();

      const renderPassDescriptor: GPURenderPassDescriptor = {
        colorAttachments: [
          { view: textureView, clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 }, loadOp: 'clear', storeOp: 'store' },
        ],
      };

      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
      passEncoder.setPipeline(pipeline);
      passEncoder.draw(3);
      passEncoder.end();

      device.queue.submit([commandEncoder.finish()]);
      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  };

  useEffect(() => {
    initWebGpu();
  }, []);
  return <canvas width="512" height="512"></canvas>;
};

export default WebGL;
