import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import 'tdesign-react/es/style/index.css'; // 少量公共样式
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
