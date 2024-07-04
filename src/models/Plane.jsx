import React, { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "../assets/3d/cartoon_plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations, materials } = useGLTF(planeScene); // Add materials here
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions.Animation.play();
    } else {
      actions.Animation.stop();
    }
  }, [actions, isRotating]);

  useEffect(() => {
    if (materials["Material.002"]) {
      materials["Material.002"].color.set("#097969");
    }

    if (materials["Material.001"]) {
      materials["Material.001"].color.set("#90EE90");
    }

    if (materials["Material.003"]) {
      materials["Material.003"].color.set("#43A047");
    }

    if (materials["Material.004"]) {
      materials["Material.004"].color.set("#90EE90");
    }
  }, [materials]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
