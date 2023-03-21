import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

function ObjectSelector({ children }) {
  const [selectedObject, setSelectedObject] = useState(null);
  const raycaster = useRef();
  const mouse = useRef();

  useFrame(({ camera, scene }) => {
    if (!raycaster.current || !mouse.current) return;
    raycaster.current.setFromCamera(mouse.current, camera);
    const intersects = raycaster.current.intersectObjects(scene.children, true);
    if (intersects.length) {
      const selected = intersects[0].object;
      if (selected !== selectedObject) {
        setSelectedObject(selected);
      }
    } else {
      if (selectedObject) {
        setSelectedObject(null);
      }
    }
  });

  const handleMouseMove = (e) => {
    if (!raycaster.current || !mouse.current) return;
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <>
      <mesh
        visible={false}
        frustumCulled={false}
        ref={raycaster}
      />
      <group
        onMouseMove={handleMouseMove}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            isSelected: selectedObject === child,
          })
        )}
      </group>
    </>
  );
}

export default ObjectSelector;