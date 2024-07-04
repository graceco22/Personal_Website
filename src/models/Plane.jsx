import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "../assets/3d/cartoon_plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Fly"].play();
    } else {
      actions["Fly"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
