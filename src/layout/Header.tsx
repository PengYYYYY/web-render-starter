import { Link } from 'react-router-dom';
import { Button } from 'tdesign-react';

export const Header = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to={'vector'}>
        <Button>1.svg</Button>
      </Link>
      <Link to={'canvas'}>
        <Button>2.canvas</Button>
      </Link>
      <Link to={'webgl'}>
        <Button>3.webgl</Button>
      </Link>
      <Link to={'canvaskit'}>
        <Button>4.canvaskit</Button>
      </Link>
      <Link to={'webgpu'}>
        <Button>5.webgpu</Button>
      </Link>
      <Link to={'matter'}>
        <Button>6.matter.js</Button>
      </Link>
      <Link to={'pixi'}>
        <Button>7.pixi.js</Button>
      </Link>
    </div>
  );
};
