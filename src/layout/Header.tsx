import { Link } from 'react-router-dom';
import { Button } from 'tdesign-react';

export const Header = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to={'vector'}>
        <Button>vector</Button>
      </Link>
      <Link to={'svg'}>
        <Button>svg</Button>
      </Link>
      <Link to={'canvas'}>
        <Button>canvas</Button>
      </Link>
      <Link to={'webgl'}>
        <Button>webgl</Button>
      </Link>
      <Link to={'canvaskit'}>
        <Button>canvaskit</Button>
      </Link>
      <Link to={'webgpu'}>
        <Button>webgpu</Button>
      </Link>
    </div>
  );
};
