import { useEffect } from 'react';

const canvasCssClass = {
  width: '400px',
  height: '400px',
};

const Canvas = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    canvas.width = 600;
    canvas.height = 600;
    const context = canvas.getContext('2d')!;
    const rectSize = {
      width: 100,
      height: 100,
    };

    context.save();
    context.fillStyle = 'green';
    context.fillRect(canvas.width - rectSize.width, canvas.height - rectSize.height, rectSize.width, rectSize.height);
    context.restore();

    // 位移
    context.translate(100, 50);
    context.fillStyle = 'red';
    context.fillRect(0, 0, 80, 80);
    context.translate(-100, -50);

    context.fillStyle = 'gray';
    context.fillRect(0, 0, 80, 80);

    // 描边三角形
    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, 100);
    context.lineTo(200, 100);
    context.closePath();
    context.stroke();

    // 圆弧
    context.beginPath();
    context.arc(400, 200, 50, 0, 1 * Math.PI);
    context.stroke();

    // 三阶贝塞尔曲线
    context.translate(-10, 150);
    context.beginPath();
    context.moveTo(50, 20);
    context.bezierCurveTo(230, 30, 150, 60, 50, 100);
    context.stroke();

    context.fillStyle = 'blue';
    // start point
    context.fillRect(50, 20, 10, 10);
    // end point
    context.fillRect(50, 100, 10, 10);

    context.fillStyle = 'green';
    // control point one
    context.fillRect(230, 30, 10, 10);
    // control point two
    context.fillRect(150, 70, 10, 10);
    context.translate(10, -150);

    // 渲染文本
    context.font = '50px serif';
    context.strokeText('Hello world', 10, 400);
  });
  return <canvas style={{ background: '#EFEFEF', ...canvasCssClass }} />;
};

export default Canvas;
