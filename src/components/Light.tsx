import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Light() {
	const light = useRef(null);

	useFrame((state) => {
		state.camera.getWorldPosition(light.current.position);
		state.camera.getWorldQuaternion(light.current.quaternion);
	});

	return <pointLight intensity={1} ref={light} />;
}

export default Light;
