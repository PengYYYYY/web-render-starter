import { useEffect } from 'react';
import * as Matter from 'matter-js';

const { Engine, Render, Runner, Bodies, Composite, Vector } = Matter;

const Canvas = () => {
  let engine: Matter.Engine | null = null;

  const runMatter = () => {
    // 引擎
    engine = Engine.create();

    // 渲染器
    const render = Render.create({
      element: document.getElementById('matter')!,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        // 关闭线框模式
        wireframes: false,
      },
    });

    // 创建两个刚体
    const boxA = Bodies.rectangle(400, 200, 80, 80, {
      render: {
        fillStyle: 'orange',
      },
      angle: (Math.PI / 180) * 45,
    });

    const vertices = [
      Vector.create(0, 0),
      Vector.create(50, 0),
      Vector.create(50, 50),
      Vector.create(25, 75),
      Vector.create(0, 50),
    ];

    // 自定义多边形
    const trapezoid = Matter.Bodies.fromVertices(100, 100, vertices as any, {
      restitution: 0.5,
      mass: 0.1,
    });

    const boxB = Bodies.rectangle(450, 50, 80, 80);

    // 创建地板,静止物体
    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true, render: { fillStyle: 'pink' } });

    // 刚体
    Composite.add(engine.world, [trapezoid, boxA, boxB, ground]);

    //
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  };

  useEffect(() => {
    runMatter();
    return () => {
      if (engine) {
        Matter.Engine.clear(engine);
      }
    };
  }, []);

  return <div id="matter"></div>;
};

export default Canvas;
