import { useEffect } from 'react';
import { CanvasKitInitBase } from '../canvaskit/canvaskit';
import { ICanvasKit } from '../interface/canvaskit';

const CanvasKit = () => {
  useEffect(() => {
    const ckLoaded = CanvasKitInitBase({
      locateFile: (file: File) => {
        return '/src/assets/' + file;
      },
    });

    ckLoaded.then((CanvasKit: ICanvasKit) => {
      const surface = CanvasKit.MakeCanvasSurface('foo')!;
      const paint = new CanvasKit.Paint();
      paint.setColor(CanvasKit.Color4f(0.9, 0, 0, 1.0));
      paint.setStyle(CanvasKit.PaintStyle.Stroke);
      paint.setAntiAlias(true);

      const rr = CanvasKit.RRectXY(CanvasKit.LTRBRect(10, 60, 210, 260), 25, 15);

      function draw(canvas: any) {
        canvas.clear(CanvasKit.WHITE);
        canvas.drawRRect(rr, paint);
      }
      surface.drawOnce(draw);
    });
  }, []);

  return <canvas id="foo" width="300" height="300"></canvas>;
};

export default CanvasKit;
