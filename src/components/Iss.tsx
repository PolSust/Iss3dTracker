/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "react-three-fiber";

type GLTFResult = GLTF & {
	nodes: {
		iss_d_ring_d_ring_with_Tex_0: THREE.Mesh;
		iss_graple_graple_with_Tex_0: THREE.Mesh;
		iss_iss_d0_iss_dcs_with_Tex_0: THREE.Mesh;
		iss_iss_dc_iss_dc_with_Tex_0: THREE.Mesh;
		iss_iss_un_iss_un_with_Tex_0: THREE.Mesh;
		iss_issb2__issb2_with_Tex__0: THREE.Mesh;
		iss_issb3__issb3_with_Tex__0: THREE.Mesh;
		iss_issb4__issb4_with_Tex__0: THREE.Mesh;
		iss_issb_7_issb_with_Tex_I_0: THREE.Mesh;
		iss_issbs0_issbso2_with_Tex_0: THREE.Mesh;
		iss_issbs__issbs_with_Tex__0: THREE.Mesh;
		iss_issbso_issbso_with_Tex_0: THREE.Mesh;
		iss_issco0_isscov2_with_Tex_0: THREE.Mesh;
		iss_isscov_isscover_with_Te_0: THREE.Mesh;
		iss_isscup_isscup_with_Tex_0: THREE.Mesh;
		iss_issdis_issdish_with_Tex_0: THREE.Mesh;
		iss_issdot_issdot_with_Tex_0: THREE.Mesh;
		iss_issesa_issesa_with_Tex_0: THREE.Mesh;
		iss_isshan_isshand_with_Tex_0: THREE.Mesh;
		iss_issins_issins_with_Tex_0: THREE.Mesh;
		iss_issku0_issku2_with_Tex_0: THREE.Mesh;
		iss_issku1_issku1_with_Tex_0: THREE.Mesh;
		iss_issku2_issku2_with_Tex_0: THREE.Mesh;
		iss_issku3_issusa_with_Tex_0: THREE.Mesh;
		iss_issku4_issusa_with_Tex_0: THREE.Mesh;
		iss_issku__issku_with_Tex__0: THREE.Mesh;
		iss_issmb__issmb_with_Tex__0: THREE.Mesh;
		iss_issmod_issmod_with_Tex_0: THREE.Mesh;
		iss_issp20_issred_with_Tex_0: THREE.Mesh;
		iss_issp21_issred_with_Tex_0: THREE.Mesh;
		iss_issp2__issp2_with_Tex__0: THREE.Mesh;
		iss_isspan_isspanel_with_Te_0: THREE.Mesh;
		iss_issrad_issrad_with_Tex_0: THREE.Mesh;
		iss_issred_Default_0: THREE.Mesh;
		iss_isssol_isssolar_with_Te_0: THREE.Mesh;
		["iss_issus1_19_-_Default_0"]: THREE.Mesh;
		iss_issusa_issusaf_with_Tex_0: THREE.Mesh;
		iss_isszmo_isszmod_with_Tex_0: THREE.Mesh;
		iss_metalc_metalcon_with_Te_0: THREE.Mesh;
		iss_nasda__nasda_with_Tex__0: THREE.Mesh;
		iss_questc_questcov_with_Te_0: THREE.Mesh;
		mesh858_Material2_0: THREE.Mesh;
		mesh859_Material2_0: THREE.Mesh;
		mesh860_Material2_0: THREE.Mesh;
		mesh861_Material2_0: THREE.Mesh;
		mesh862_Material2_0: THREE.Mesh;
		mesh863_Material2_0: THREE.Mesh;
		mesh864_material04_0: THREE.Mesh;
		mesh865_material04_0: THREE.Mesh;
		mesh866_Material3_0: THREE.Mesh;
		mesh867_Material3_0: THREE.Mesh;
		mesh868_Material2_0: THREE.Mesh;
		mesh869_bluebg_0: THREE.Mesh;
		mesh870_Material1_0: THREE.Mesh;
		mesh871_Material1_0: THREE.Mesh;
		mesh872_Material1_0: THREE.Mesh;
		mesh873_Material1_0: THREE.Mesh;
		mesh874_bluebg_0: THREE.Mesh;
		mesh875_Material1_0: THREE.Mesh;
		mesh876_Material1_0: THREE.Mesh;
		mesh877_Material1_0: THREE.Mesh;
		mesh878_Material1_0: THREE.Mesh;
		mesh879_white_0: THREE.Mesh;
		mesh880_Material3_0: THREE.Mesh;
		mesh881_Material1_0: THREE.Mesh;
		mesh882_white_0: THREE.Mesh;
		mesh883_white_0: THREE.Mesh;
		mesh884_Material2_0: THREE.Mesh;
		mesh885_Material2_0: THREE.Mesh;
		mesh886_Material2_0: THREE.Mesh;
		mesh887_Material2_0: THREE.Mesh;
		mesh888_material04_0: THREE.Mesh;
		mesh889_white_0: THREE.Mesh;
		mesh890_white_0: THREE.Mesh;
		mesh891_white_0: THREE.Mesh;
		mesh892_white_0: THREE.Mesh;
		mesh893_white_0: THREE.Mesh;
		mesh894_Material2_0: THREE.Mesh;
		mesh895_Material2_0: THREE.Mesh;
		mesh896_Material2_0: THREE.Mesh;
		mesh897_Material2_0: THREE.Mesh;
		mesh898_Material2_0: THREE.Mesh;
		mesh899_Material2_0: THREE.Mesh;
		mesh900_material04_0: THREE.Mesh;
		mesh901_material04_0: THREE.Mesh;
		mesh902_Material3_0: THREE.Mesh;
		mesh903_Material3_0: THREE.Mesh;
		mesh904_Material2_0: THREE.Mesh;
		mesh905_white_0: THREE.Mesh;
		mesh906_Material3_0: THREE.Mesh;
		mesh907_Material1_0: THREE.Mesh;
		mesh908_white_0: THREE.Mesh;
		mesh909_white_0: THREE.Mesh;
		mesh910_Material2_0: THREE.Mesh;
		mesh911_Material2_0: THREE.Mesh;
		mesh912_Material2_0: THREE.Mesh;
		mesh913_Material2_0: THREE.Mesh;
		mesh914_material04_0: THREE.Mesh;
		mesh915_white_0: THREE.Mesh;
		mesh916_white_0: THREE.Mesh;
		mesh917_white_0: THREE.Mesh;
		mesh918_white_0: THREE.Mesh;
		mesh919_white_0: THREE.Mesh;
		mplm_issle_issleo_with_Tex_0: THREE.Mesh;
		mplm_issus_issusaf_with_1_0: THREE.Mesh;
	};
	materials: {
		d_ring_with_Tex: THREE.MeshStandardMaterial;
		graple_with_Tex: THREE.MeshStandardMaterial;
		iss_dcs_with_Tex: THREE.MeshStandardMaterial;
		iss_dc_with_Tex: THREE.MeshStandardMaterial;
		iss_un_with_Tex: THREE.MeshStandardMaterial;
		issb2_with_Tex: THREE.MeshStandardMaterial;
		issb3_with_Tex: THREE.MeshStandardMaterial;
		issb4_with_Tex: THREE.MeshStandardMaterial;
		issb_with_Tex_I: THREE.MeshStandardMaterial;
		issbso2_with_Tex: THREE.MeshStandardMaterial;
		issbs_with_Tex: THREE.MeshStandardMaterial;
		issbso_with_Tex: THREE.MeshStandardMaterial;
		isscov2_with_Tex: THREE.MeshStandardMaterial;
		isscover_with_Te: THREE.MeshStandardMaterial;
		isscup_with_Tex: THREE.MeshStandardMaterial;
		issdish_with_Tex: THREE.MeshStandardMaterial;
		issdot_with_Tex: THREE.MeshStandardMaterial;
		issesa_with_Tex: THREE.MeshStandardMaterial;
		isshand_with_Tex: THREE.MeshStandardMaterial;
		issins_with_Tex: THREE.MeshStandardMaterial;
		issku2_with_Tex: THREE.MeshStandardMaterial;
		issku1_with_Tex: THREE.MeshStandardMaterial;
		issusa_with_Tex: THREE.MeshStandardMaterial;
		issku_with_Tex: THREE.MeshStandardMaterial;
		issmb_with_Tex: THREE.MeshStandardMaterial;
		issmod_with_Tex: THREE.MeshStandardMaterial;
		issred_with_Tex: THREE.MeshStandardMaterial;
		issp2_with_Tex: THREE.MeshStandardMaterial;
		isspanel_with_Te: THREE.MeshStandardMaterial;
		issrad_with_Tex: THREE.MeshStandardMaterial;
		Default: THREE.MeshStandardMaterial;
		isssolar_with_Te: THREE.MeshStandardMaterial;
		["19_-_Default"]: THREE.MeshStandardMaterial;
		issusaf_with_Tex: THREE.MeshStandardMaterial;
		isszmod_with_Tex: THREE.MeshStandardMaterial;
		metalcon_with_Te: THREE.MeshStandardMaterial;
		nasda_with_Tex: THREE.MeshStandardMaterial;
		questcov_with_Te: THREE.MeshStandardMaterial;
		Material2: THREE.MeshStandardMaterial;
		material04: THREE.MeshStandardMaterial;
		Material3: THREE.MeshStandardMaterial;
		bluebg: THREE.MeshStandardMaterial;
		Material1: THREE.MeshStandardMaterial;
		white: THREE.MeshStandardMaterial;
		issleo_with_Tex: THREE.MeshStandardMaterial;
		issusaf_with_1: THREE.MeshStandardMaterial;
	};
};

const lookAtCenter = (iss) => {
	iss.current.lookAt(new THREE.Vector3(0, 0, 0));
	iss.current.rotateX(1.6);
};

function Iss(props: JSX.IntrinsicElements["group"] | any) {
	const { nodes, materials } = useGLTF("/iss.glb") as GLTFResult;

	const iss = useRef<THREE.Group>();

	useEffect(() => {
		iss.current.position.add(new THREE.Vector3(0, 0, 0));
		iss.current.position.applyAxisAngle(new THREE.Vector3(0, 0, 0), 1);
		iss.current.position.add(new THREE.Vector3(4.4, 0, 0));

		iss.current.rotateOnAxis(new THREE.Vector3(0, 0, 1), 5);
	}, [iss]);

	useFrame(() => {
		if (!iss.current) return;

		lookAtCenter(iss);

		iss.current.position.applyAxisAngle(new THREE.Vector3(0, 1, 0.2), 0.005);
	});

	return (
		<group ref={iss} {...props} dispose={null}>
			<group position={[-6.97, 0, 3.58]}>
				<group position={[-2.84, 4.08, 6.46]} rotation={[0, 0.83, -0.28]} />
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_d_ring_d_ring_with_Tex_0.geometry}
						material={materials.d_ring_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_graple_graple_with_Tex_0.geometry}
						material={materials.graple_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_iss_d0_iss_dcs_with_Tex_0.geometry}
						material={materials.iss_dcs_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_iss_dc_iss_dc_with_Tex_0.geometry}
						material={materials.iss_dc_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_iss_un_iss_un_with_Tex_0.geometry}
						material={materials.iss_un_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issb2__issb2_with_Tex__0.geometry}
						material={materials.issb2_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issb3__issb3_with_Tex__0.geometry}
						material={materials.issb3_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issb4__issb4_with_Tex__0.geometry}
						material={materials.issb4_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issb_7_issb_with_Tex_I_0.geometry}
						material={materials.issb_with_Tex_I}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issbs0_issbso2_with_Tex_0.geometry}
						material={materials.issbso2_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issbs__issbs_with_Tex__0.geometry}
						material={materials.issbs_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issbso_issbso_with_Tex_0.geometry}
						material={materials.issbso_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issco0_isscov2_with_Tex_0.geometry}
						material={materials.isscov2_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_isscov_isscover_with_Te_0.geometry}
						material={materials.isscover_with_Te}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_isscup_isscup_with_Tex_0.geometry}
						material={materials.isscup_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issdis_issdish_with_Tex_0.geometry}
						material={materials.issdish_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issdot_issdot_with_Tex_0.geometry}
						material={materials.issdot_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issesa_issesa_with_Tex_0.geometry}
						material={materials.issesa_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_isshan_isshand_with_Tex_0.geometry}
						material={materials.isshand_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issins_issins_with_Tex_0.geometry}
						material={materials.issins_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issku0_issku2_with_Tex_0.geometry}
						material={nodes.iss_issku0_issku2_with_Tex_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issku1_issku1_with_Tex_0.geometry}
						material={materials.issku1_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issku2_issku2_with_Tex_0.geometry}
						material={nodes.iss_issku2_issku2_with_Tex_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issku3_issusa_with_Tex_0.geometry}
						material={nodes.iss_issku3_issusa_with_Tex_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issku4_issusa_with_Tex_0.geometry}
						material={nodes.iss_issku4_issusa_with_Tex_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issku__issku_with_Tex__0.geometry}
						material={materials.issku_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issmb__issmb_with_Tex__0.geometry}
						material={materials.issmb_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issmod_issmod_with_Tex_0.geometry}
						material={materials.issmod_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issp20_issred_with_Tex_0.geometry}
						material={nodes.iss_issp20_issred_with_Tex_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issp21_issred_with_Tex_0.geometry}
						material={nodes.iss_issp21_issred_with_Tex_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issp2__issp2_with_Tex__0.geometry}
						material={materials.issp2_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_isspan_isspanel_with_Te_0.geometry}
						material={materials.isspanel_with_Te}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issrad_issrad_with_Tex_0.geometry}
						material={materials.issrad_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issred_Default_0.geometry}
						material={materials.Default}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_isssol_isssolar_with_Te_0.geometry}
						material={materials.isssolar_with_Te}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes["iss_issus1_19_-_Default_0"].geometry}
						material={materials["19_-_Default"]}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_issusa_issusaf_with_Tex_0.geometry}
						material={materials.issusaf_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_isszmo_isszmod_with_Tex_0.geometry}
						material={materials.isszmod_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_metalc_metalcon_with_Te_0.geometry}
						material={materials.metalcon_with_Te}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_nasda__nasda_with_Tex__0.geometry}
						material={materials.nasda_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.iss_questc_questcov_with_Te_0.geometry}
						material={materials.questcov_with_Te}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh858_Material2_0.geometry}
						material={nodes.mesh858_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh859_Material2_0.geometry}
						material={nodes.mesh859_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh860_Material2_0.geometry}
						material={nodes.mesh860_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh861_Material2_0.geometry}
						material={nodes.mesh861_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh862_Material2_0.geometry}
						material={nodes.mesh862_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh863_Material2_0.geometry}
						material={nodes.mesh863_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh864_material04_0.geometry}
						material={nodes.mesh864_material04_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh865_material04_0.geometry}
						material={nodes.mesh865_material04_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh866_Material3_0.geometry}
						material={nodes.mesh866_Material3_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh867_Material3_0.geometry}
						material={nodes.mesh867_Material3_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh868_Material2_0.geometry}
						material={nodes.mesh868_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh869_bluebg_0.geometry}
						material={nodes.mesh869_bluebg_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh870_Material1_0.geometry}
						material={nodes.mesh870_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh871_Material1_0.geometry}
						material={nodes.mesh871_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh872_Material1_0.geometry}
						material={nodes.mesh872_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh873_Material1_0.geometry}
						material={nodes.mesh873_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh874_bluebg_0.geometry}
						material={nodes.mesh874_bluebg_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh875_Material1_0.geometry}
						material={nodes.mesh875_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh876_Material1_0.geometry}
						material={nodes.mesh876_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh877_Material1_0.geometry}
						material={nodes.mesh877_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh878_Material1_0.geometry}
						material={nodes.mesh878_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh879_white_0.geometry}
						material={nodes.mesh879_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh880_Material3_0.geometry}
						material={nodes.mesh880_Material3_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh881_Material1_0.geometry}
						material={nodes.mesh881_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh882_white_0.geometry}
						material={nodes.mesh882_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh883_white_0.geometry}
						material={nodes.mesh883_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh884_Material2_0.geometry}
						material={nodes.mesh884_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh885_Material2_0.geometry}
						material={nodes.mesh885_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh886_Material2_0.geometry}
						material={nodes.mesh886_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh887_Material2_0.geometry}
						material={nodes.mesh887_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh888_material04_0.geometry}
						material={nodes.mesh888_material04_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh889_white_0.geometry}
						material={nodes.mesh889_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh890_white_0.geometry}
						material={nodes.mesh890_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh891_white_0.geometry}
						material={nodes.mesh891_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh892_white_0.geometry}
						material={nodes.mesh892_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh893_white_0.geometry}
						material={nodes.mesh893_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh894_Material2_0.geometry}
						material={nodes.mesh894_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh895_Material2_0.geometry}
						material={nodes.mesh895_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh896_Material2_0.geometry}
						material={nodes.mesh896_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh897_Material2_0.geometry}
						material={nodes.mesh897_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh898_Material2_0.geometry}
						material={nodes.mesh898_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh899_Material2_0.geometry}
						material={nodes.mesh899_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh900_material04_0.geometry}
						material={nodes.mesh900_material04_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh901_material04_0.geometry}
						material={nodes.mesh901_material04_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh902_Material3_0.geometry}
						material={nodes.mesh902_Material3_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh903_Material3_0.geometry}
						material={nodes.mesh903_Material3_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh904_Material2_0.geometry}
						material={nodes.mesh904_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh905_white_0.geometry}
						material={nodes.mesh905_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh906_Material3_0.geometry}
						material={nodes.mesh906_Material3_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh907_Material1_0.geometry}
						material={nodes.mesh907_Material1_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh908_white_0.geometry}
						material={nodes.mesh908_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh909_white_0.geometry}
						material={nodes.mesh909_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh910_Material2_0.geometry}
						material={nodes.mesh910_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh911_Material2_0.geometry}
						material={nodes.mesh911_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh912_Material2_0.geometry}
						material={nodes.mesh912_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh913_Material2_0.geometry}
						material={nodes.mesh913_Material2_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh914_material04_0.geometry}
						material={nodes.mesh914_material04_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh915_white_0.geometry}
						material={nodes.mesh915_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh916_white_0.geometry}
						material={nodes.mesh916_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh917_white_0.geometry}
						material={nodes.mesh917_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh918_white_0.geometry}
						material={nodes.mesh918_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mesh919_white_0.geometry}
						material={nodes.mesh919_white_0.material}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mplm_issle_issleo_with_Tex_0.geometry}
						material={materials.issleo_with_Tex}
					/>
				</group>
				<group position={[7.01, 0, -3.77]}>
					<mesh
						geometry={nodes.mplm_issus_issusaf_with_1_0.geometry}
						material={materials.issusaf_with_1}
					/>
				</group>
			</group>
		</group>
	);
}
useGLTF.preload("/iss.glb");

export default Iss;
