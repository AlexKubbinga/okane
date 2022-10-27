/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Mesh } from 'three';

export function GregorModel(props: any) {
	const group = useRef<Mesh>(null!);
	const { nodes, materials, animations } = useGLTF(
		'/models/gregor_model.glb'
	) as any;
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		const animAction = actions['Armature|mixamo.com|Layer0'];
		animAction!.play();
	});

	return (
		<group ref={group} {...props} dispose={null}>
			<group name='Scene'>
				<group name='Armature001'>
					<primitive object={nodes.Hips} />
					<skinnedMesh
						name='Wolf3D_Body001'
						geometry={nodes.Wolf3D_Body001.geometry}
						material={materials.Wolf3D_Body}
						skeleton={nodes.Wolf3D_Body001.skeleton}
					/>
					<skinnedMesh
						name='EyeLeft001'
						geometry={nodes.EyeLeft001.geometry}
						material={materials.Wolf3D_Eye}
						skeleton={nodes.EyeLeft001.skeleton}
						morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
						morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
					/>
					<skinnedMesh
						name='EyeRight001'
						geometry={nodes.EyeRight001.geometry}
						material={materials.Wolf3D_Eye}
						skeleton={nodes.EyeRight001.skeleton}
						morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
						morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
					/>
					<skinnedMesh
						name='Wolf3D_Outfit_Bottom001'
						geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
						material={materials.Wolf3D_Outfit_Bottom}
						skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Hair001'
						geometry={nodes.Wolf3D_Hair001.geometry}
						material={materials['Wolf3D_Hair.001']}
						skeleton={nodes.Wolf3D_Hair001.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Outfit_Top001'
						geometry={nodes.Wolf3D_Outfit_Top001.geometry}
						material={materials.Wolf3D_Outfit_Top}
						skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Teeth001'
						geometry={nodes.Wolf3D_Teeth001.geometry}
						material={materials.Wolf3D_Teeth}
						skeleton={nodes.Wolf3D_Teeth001.skeleton}
						morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
						morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
					/>
					<skinnedMesh
						name='Wolf3D_Outfit_Footwear001'
						geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
						material={materials.Wolf3D_Outfit_Footwear}
						skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Head001'
						geometry={nodes.Wolf3D_Head001.geometry}
						material={materials.Wolf3D_Skin}
						skeleton={nodes.Wolf3D_Head001.skeleton}
						morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
						morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/models/gregor_model.glb');
