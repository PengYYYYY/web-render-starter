import { useEffect } from 'react';

const Canvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('stage') as HTMLCanvasElement;

    const context = canvas.getContext('2d')!;

    const rectSize = [100, 100];
    context.translate(-0.5 * rectSize[0], -0.5 * rectSize[1]);
    context.fillStyle = 'red';
    context.beginPath();
    context.rect(0.5 * canvas.width, 0.5 * canvas.height, 100, 100);
    context.fill();
    context.save();

    context.restore();
  });
  return <canvas id="stage"></canvas>;
};

export default Canvas;
