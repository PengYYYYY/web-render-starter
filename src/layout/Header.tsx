import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <Link to={'svg'}>svg</Link>
      <Link to={'canvas'}>canvas</Link>
      <Link to={'webgl'}>webgl</Link>
      <Link to={'canvaskit'}>canvaskit</Link>
      <Link to={'webgpu'}>webgpu</Link>
    </div>
  );
};
