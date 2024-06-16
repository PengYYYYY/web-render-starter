import { useEffect } from 'react';
import * as Three from 'three';

const width = window.innerWidth;
const height = window.innerHeight;

const Dom = () => {
  useEffect(() => {
    renderThree();
  }, []);

  const renderThree = () => {
    // 场景
    const scene = new Three.Scene();

    // 辅助线
    const axes = new Three.AxesHelper(2);
    scene.add(axes);

    // 几何体
    const geometry = new Three.BoxGeometry(1, 1, 1);
    // 材质
    const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
    // 物体
    const cube = new Three.Mesh(geometry, material);
    cube.position.set(1, -1, 0);

    scene.add(cube);

    // 光线
    const light = new Three.AmbientLight();
    scene.add(light);

    // 相机
    const camera = new Three.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    // 渲染器
    const renderer = new Three.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.render(scene, camera);

    document.body.appendChild(renderer.domElement);

    const clock = new Three.Clock();
    function tick() {
      const time = clock.getElapsedTime();

      cube.rotation.z = time;
      cube.position.x = Math.sign(time);
      cube.position.y = Math.sign(time);

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }

    tick();
  };

  return <div></div>;
};

export default Dom;
