import { useEffect } from 'react';
import rough from 'roughjs';

const Canvas = () => {
  useEffect(() => {
    const rc = rough.canvas(document.querySelector('canvas') as HTMLCanvasElement);
    const hillOpts = { roughness: 2.8, strokeWidth: 2, fill: 'blue' };
    rc.path('M76 256L176 156L276 256', hillOpts);
    rc.path('M236 256L336 156L436 256', hillOpts);
    rc.circle(256, 106, 105, {
      stroke: 'red',
      strokeWidth: 4,
      fill: 'rgba(255, 255, 0, 0.4)',
      fillStyle: 'solid',
    });
  });
  return <canvas width={500} height={500} style={{ background: 'gray' }}></canvas>;
};

export default Canvas;
