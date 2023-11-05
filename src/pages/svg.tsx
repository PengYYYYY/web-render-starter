const Svg = () => {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {/* 矩形 */}
      <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="145" height="145" fill="#D9D9D9" />
      </svg>

      {/* 矩形，带圆角 */}
      <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="145" rx="30" ry="10" height="145" fill="#D9D9D9" />
      </svg>

      {/* 圆形 */}
      <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="72.5" cy="72.5" r="72.5" fill="#D9D9D9" />
      </svg>

      {/* 线段 */}
      <svg width="145" height="145" viewBox="0 0 145 145">
        <line x1="0" x2="145" y1="0" y2="145" stroke="#42b883" strokeWidth="2" />
      </svg>

      {/* 折线 */}
      <svg width="145" height="145">
        <polyline points="10 10, 10 20, 20 30, 30 20, 90 50, 145, 145" stroke="#42b883" strokeWidth="2" fill="none" />
      </svg>

      {/* path，操作符号 */}
      <svg width="100" height="145" viewBox="0 0 100 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 96.1883 21.2486 H 61.0656 L39.1392 145 H13.5244 L35.2864 21.2486 H0 L3.81168 0 H100 L96.1883 21.2486 Z"
          fill="black"
        />
      </svg>

      {/* path, 曲线 */}
      <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent" />
      </svg>

      {/* 端点类型 */}
      <svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <line x1="40" x2="120" y1="20" y2="20" stroke="black" fill="red" strokeWidth="10" strokeLinecap="butt" />
        <line x1="40" x2="120" y1="60" y2="60" stroke="black" strokeWidth="10" strokeLinecap="square" />
        <line x1="40" x2="120" y1="100" y2="100" stroke="black" strokeWidth="10" strokeLinecap="round" />
      </svg>

      {/* 连接方式 */}
      <svg width="160" height="240" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline
          points="40 60 80 20 120 60"
          stroke="black"
          strokeWidth="20"
          strokeLinecap="butt"
          fill="none"
          strokeLinejoin="miter"
        />

        <polyline
          points="40 140 80 100 120 140"
          stroke="black"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          strokeLinejoin="round"
        />

        <polyline
          points="40 220 80 180 120 220"
          stroke="black"
          strokeWidth="20"
          strokeLinecap="square"
          fill="none"
          strokeLinejoin="bevel"
        />
      </svg>

      {/* 虚线 */}
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <path
          d="M 10 75 Q 50 10 100 75 T 190 75"
          stroke="black"
          strokeLinecap="round"
          strokeDasharray="5,10,5"
          fill="none"
        />
        <path
          d="M 10 75 L 190 75"
          stroke="black"
          strokeLinecap="round"
          strokeWidth="1"
          strokeDasharray="5,5"
          fill="none"
        />
      </svg>

      {/* 线性渐变 */}
      <svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="red" />
            <stop offset="50%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="blue" />
          </linearGradient>
        </defs>
        <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#Gradient1)" />
      </svg>

      {/* 中心渐变 */}
      <svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="RadialGradient1">
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="blue" />
          </radialGradient>
          <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="blue" />
          </radialGradient>
        </defs>

        <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient1)" />
        <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient2)" />
      </svg>
    </div>
  );
};

export default Svg;
