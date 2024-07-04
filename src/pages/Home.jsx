import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Island from "../models/Island";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Volcano from "../models/Volcano";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -5.5, -46];
    let rotation = [1, 1, 2];

    if (window.innerWidth < 768) {
      screenScale = [0.0035, 0.0035, 0.0035];
    } else {
      screenScale = [0.0035, 0.0035, 0.0035];
    }

    return [screenScale, screenPosition];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.2, 0.2, 0.2];
      screenPosition = [0, -4, -5];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Volcano
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
