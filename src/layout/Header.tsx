import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <Link to={'webgl'}>webgl</Link>
      <Link to={'canvas'}>canvas</Link>
      <Link to={'rough'}>rough</Link>
      <Link to={'canvaskit'}>canvaskit</Link>
    </div>
  );
};
