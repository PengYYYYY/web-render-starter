import { useEffect } from 'react';

const WebGL = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    // 创建 WebGL 上下文
    const gl = canvas.getContext('webgl')!;

    // const vertex = `
    //   attribute vec2 position;
    //   varying vec3 color;

    //   void main() {
    //     gl_PointSize = 1.0;
    //     color = vec3(0.5 + position * 0.5, 0.0);
    //     gl_Position = vec4(position * 0.5, 1.0, 1.0);
    //   }
    // `;
    // const fragment = `
    //   precision mediump float;
    //   varying vec3 color;
    //   void main() {
    //     gl_FragColor = vec4(color, 1.0);
    //     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    //   }
    // `;

    const vertex = `
      attribute vec2 position;
      
      void main() {
        gl_PointSize = 1.0;
        gl_Position = vec4(position * 0.5, 1.0, 1.0);
      }
    `;

    const fragment = `
      precision mediump float;
      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
    `;

    // 顶点着色器
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, vertex);
    gl.compileShader(vertexShader);

    // 片元着色器
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, fragment);
    gl.compileShader(fragmentShader);

    // 创建 WebGLProgram 对象
    const program = gl.createProgram()!;

    // 添加 shader 到 gl 程序中
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // 连接并使用 WebGLProgram
    gl.linkProgram(program);
    gl.useProgram(program);

    // 定义三角形的三个顶点
    const points = new Float32Array([-1, -1, 0, 1, 1, -1]);
    const bufferId = gl.createBuffer();

    // 写入 webGL 缓冲区
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

    // 获取顶点着色器中的 position 变量
    const vPosition = gl.getAttribLocation(program, 'position');
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    // 执行着色器程序完成绘制
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, points.length / 2);
  }, []);

  return <canvas width="512px" height="512px"></canvas>;
};

export default WebGL;
