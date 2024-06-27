import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
POPUP
</div> */

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
