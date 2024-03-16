import { useEffect } from 'react';
import { Application, FillGradient, Text, Graphics, Color, TextStyle } from 'pixi.js';

const pixiRun = async () => {
  const app = new Application();

  // Wait for the Renderer to be available
  await app.init({ background: '#1099bb', resizeTo: window });

  document.getElementById('pixi')!.appendChild(app.canvas);

  const basicText = new Text({ text: 'Basic text in pixi' });

  basicText.x = 50;
  basicText.y = 100;

  app.stage.addChild(basicText);

  // Create gradient fill
  const fill = new FillGradient(0, 0, 0, 36 * 1.7 * 7);

  const colors = [0xffffff, 0x00ff99].map((color) => Color.shared.setValue(color).toNumber());

  colors.forEach((number, index) => {
    const ratio = index / colors.length;

    fill.addColorStop(ratio, number);
  });

  const style = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: { fill },
    stroke: { color: '#4a1850', width: 5, join: 'round' },
    dropShadow: {
      color: '#000000',
      blur: 4,
      angle: Math.PI / 6,
      distance: 6,
    },
    wordWrap: true,
    wordWrapWidth: 440,
  });

  const richText = new Text({
    text: 'Rich text with a lot of options and across multiple lines',
    style,
  });

  richText.x = 50;
  richText.y = 220;

  app.stage.addChild(richText);

  const graphics = new Graphics();
  graphics.rect(app.screen.width / 2, app.screen.height / 2, 100, 100);
  graphics.fill(0xde3249);
  graphics.pivot.set(0, 0);
  graphics.rotation = 0.1;

  app.stage.addChild(graphics);
};

const Canvas = () => {
  useEffect(() => {
    pixiRun();
  });
  return <div id="pixi" />;
};

export default Canvas;
