import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Text } from "@react-three/drei";

import { useMemo, useRef } from "react";
import * as THREE from "three";


// ============================================================
// TYPES
// ============================================================

type Vec3 = [number, number, number];


// ============================================================
// PREMIUM DEVELOPER CORE
// ============================================================

function DeveloperCore() {

    const groupRef =
        useRef<THREE.Group>(null);

    const crystalRef =
        useRef<THREE.Mesh>(null);

    const wireRef =
        useRef<THREE.Mesh>(null);

    const innerRef =
        useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {

        const time =
            state.clock.elapsedTime;

        if (groupRef.current) {

            groupRef.current.rotation.y +=
                delta * 0.16;

            groupRef.current.rotation.x =
                Math.sin(time * 0.35) * 0.05;

            groupRef.current.position.y =
                Math.sin(time * 0.9) * 0.035;
        }

        if (crystalRef.current) {

            crystalRef.current.rotation.x +=
                delta * 0.45;

            crystalRef.current.rotation.y +=
                delta * 0.65;

            const pulse =
                1 +
                Math.sin(time * 3.2) * 0.035;

            crystalRef.current.scale.setScalar(
                pulse
            );
        }

        if (wireRef.current) {

            wireRef.current.rotation.z -=
                delta * 0.25;

            wireRef.current.rotation.y +=
                delta * 0.12;
        }

        if (innerRef.current) {

            const pulse =
                1 +
                Math.sin(time * 4) * 0.12;

            innerRef.current.scale.setScalar(
                pulse
            );
        }
    });

    return (
        <group ref={groupRef}>

            {/* =================================================
                OUTER ENERGY SHELL
            ================================================= */}

            <mesh ref={wireRef}>

                <icosahedronGeometry
                    args={[1.55, 2]}
                />

                <meshBasicMaterial
                    color="#8b5cf6"
                    wireframe
                    transparent
                    opacity={0.18}
                />

            </mesh>


            {/* =================================================
                SECOND WIREFRAME
            ================================================= */}

            <mesh
                rotation={[
                    0.4,
                    0.7,
                    0.2,
                ]}
            >

                <icosahedronGeometry
                    args={[1.28, 1]}
                />

                <meshBasicMaterial
                    color="#22d3ee"
                    wireframe
                    transparent
                    opacity={0.22}
                />

            </mesh>


            {/* =================================================
                MAIN CRYSTAL
            ================================================= */}

            <mesh ref={crystalRef}>

                <octahedronGeometry
                    args={[0.78, 2]}
                />

                <meshPhysicalMaterial
                    color="#6366f1"
                    emissive="#4f46e5"
                    emissiveIntensity={3.5}
                    metalness={0.9}
                    roughness={0.1}
                    clearcoat={1}
                    clearcoatRoughness={0.05}
                />

            </mesh>


            {/* =================================================
                INNER CORE
            ================================================= */}

            <mesh ref={innerRef}>

                <sphereGeometry
                    args={[0.28, 32, 32]}
                />

                <meshBasicMaterial
                    color="#ffffff"
                />

            </mesh>


            {/* =================================================
                PURPLE ENERGY
            ================================================= */}

            <mesh scale={1.7}>

                <sphereGeometry
                    args={[0.52, 32, 32]}
                />

                <meshBasicMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.08}
                    blending={
                        THREE.AdditiveBlending
                    }
                    depthWrite={false}
                />

            </mesh>


            {/* =================================================
                CYAN ENERGY
            ================================================= */}

            <mesh scale={2.2}>

                <sphereGeometry
                    args={[0.5, 32, 32]}
                />

                <meshBasicMaterial
                    color="#22d3ee"
                    transparent
                    opacity={0.035}
                    blending={
                        THREE.AdditiveBlending
                    }
                    depthWrite={false}
                />

            </mesh>

        </group>
    );
}


// ============================================================
// ORBITAL SYSTEM
// ============================================================

function OrbitalSystem() {

    const refs =
        useRef<(THREE.Mesh | null)[]>([]);

    const rings = [
        {
            radius: 1.7,
            tube: 0.014,
            color: "#22d3ee",
            opacity: 0.65,
        },
        {
            radius: 2.05,
            tube: 0.011,
            color: "#8b5cf6",
            opacity: 0.48,
        },
        {
            radius: 2.4,
            tube: 0.008,
            color: "#6366f1",
            opacity: 0.30,
        },
        {
            radius: 2.75,
            tube: 0.005,
            color: "#38bdf8",
            opacity: 0.16,
        },
    ];

    useFrame((_, delta) => {

        refs.current.forEach(
            (ring, index) => {

                if (!ring) return;

                ring.rotation.x +=
                    delta *
                    (index % 2 === 0
                        ? 0.28
                        : -0.18);

                ring.rotation.y +=
                    delta *
                    (index % 2 === 0
                        ? -0.16
                        : 0.12);

                ring.rotation.z +=
                    delta *
                    0.05;
            }
        );
    });

    return (
        <group>

            {rings.map(
                (ring, index) => (

                    <mesh
                        key={index}
                        ref={(el) => {
                            refs.current[index] =
                                el;
                        }}
                        rotation={[
                            index * 0.65,
                            index * 0.35,
                            index * 0.25,
                        ]}
                    >

                        <torusGeometry
                            args={[
                                ring.radius,
                                ring.tube,
                                16,
                                180,
                            ]}
                        />

                        <meshBasicMaterial
                            color={ring.color}
                            transparent
                            opacity={ring.opacity}
                        />

                    </mesh>

                )
            )}

        </group>
    );
}


// ============================================================
// NEURAL NETWORK
// ============================================================

function DeveloperNetwork() {

    const groupRef =
        useRef<THREE.Group>(null);

    const data = useMemo(() => {

        const nodes: Vec3[] = [];

        const connections: {
            from: Vec3;
            to: Vec3;
        }[] = [];

        const count = 24;

        for (let i = 0; i < count; i++) {

            const angle =
                (i / count) *
                Math.PI *
                2;

            const radius =
                2.8 +
                Math.random() * 0.5;

            nodes.push([
                Math.cos(angle) *
                    radius,

                (Math.random() - 0.5) *
                    2.4,

                Math.sin(angle) *
                    radius *
                    0.55,
            ]);
        }

        for (
            let i = 0;
            i < nodes.length;
            i++
        ) {

            connections.push({
                from: nodes[i],
                to:
                    nodes[
                        (i + 1) %
                            nodes.length
                    ],
            });

            if (i % 3 === 0) {

                connections.push({
                    from: nodes[i],
                    to: [0, 0, 0],
                });
            }
        }

        return {
            nodes,
            connections,
        };

    }, []);

    useFrame((state) => {

        if (!groupRef.current)
            return;

        groupRef.current.rotation.y =
            state.clock.elapsedTime *
            0.055;
    });

    return (
        <group ref={groupRef}>

            {/* CONNECTIONS */}

            {data.connections.map(
                (connection, index) => {

                    const geometry =
                        new THREE.BufferGeometry()
                            .setFromPoints([
                                new THREE.Vector3(
                                    ...connection.from
                                ),
                                new THREE.Vector3(
                                    ...connection.to
                                ),
                            ]);

                    const material =
                        new THREE.LineBasicMaterial({
                            color:
                                index % 2 === 0
                                    ? "#6366f1"
                                    : "#22d3ee",

                            transparent: true,

                            opacity: 0.13,
                        });

                    return (
                        <primitive
                            key={index}
                            object={
                                new THREE.Line(
                                    geometry,
                                    material
                                )
                            }
                        />
                    );
                }
            )}


            {/* NODES */}

            {data.nodes.map(
                (position, index) => (

                    <group
                        key={index}
                        position={position}
                    >

                        <mesh>

                            <sphereGeometry
                                args={[
                                    0.045,
                                    16,
                                    16,
                                ]}
                            />

                            <meshBasicMaterial
                                color={
                                    index % 2 === 0
                                        ? "#22d3ee"
                                        : "#a78bfa"
                                }
                            />

                        </mesh>


                        <mesh scale={4}>

                            <sphereGeometry
                                args={[
                                    0.04,
                                    12,
                                    12,
                                ]}
                            />

                            <meshBasicMaterial
                                color={
                                    index % 2 === 0
                                        ? "#22d3ee"
                                        : "#8b5cf6"
                                }
                                transparent
                                opacity={0.055}
                                blending={
                                    THREE.AdditiveBlending
                                }
                                depthWrite={false}
                            />

                        </mesh>

                    </group>

                )
            )}

        </group>
    );
}


// ============================================================
// FLOATING CODE
// ============================================================

function FloatingCode({
    text,
    position,
    color,
    size,
}: {
    text: string;
    position: Vec3;
    color: string;
    size: number;
}) {

    const ref =
        useRef<THREE.Group>(null);

    const baseY =
        position[1];

    useFrame((state) => {

        if (!ref.current)
            return;

        const time =
            state.clock.elapsedTime;

        ref.current.position.y =
            baseY +
            Math.sin(
                time * 0.9 +
                position[0]
            ) *
                0.10;

        ref.current.rotation.z =
            Math.sin(
                time * 0.6 +
                position[1]
            ) *
                0.035;
    });

    return (
        <group
            ref={ref}
            position={position}
        >

            <Text
                fontSize={size}
                color={color}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.012}
                outlineColor="#02030a"
            >
                {text}
            </Text>

        </group>
    );
}


// ============================================================
// TECH LABELS
// ============================================================

function TechLabels() {

    const labels = [
        {
            text: "</>",
            position: [-3.2, 1.35, 0] as Vec3,
            color: "#22d3ee",
            size: 0.40,
        },
        {
            text: "C#",
            position: [3.15, 1.35, 0] as Vec3,
            color: "#c084fc",
            size: 0.42,
        },
        {
            text: ".NET",
            position: [3.2, -1.25, 0] as Vec3,
            color: "#38bdf8",
            size: 0.30,
        },
        {
            text: "SQL",
            position: [-3.1, -1.25, 0] as Vec3,
            color: "#818cf8",
            size: 0.30,
        },
        {
            text: "API",
            position: [0, 2.75, -0.5] as Vec3,
            color: "#a78bfa",
            size: 0.28,
        },
    ];

    return (
        <group>

            {labels.map(
                (label, index) => (

                    <FloatingCode
                        key={index}
                        {...label}
                    />

                )
            )}

        </group>
    );
}


// ============================================================
// PREMIUM TERMINAL
// ============================================================

function FloatingTerminal() {

    const ref =
        useRef<THREE.Group>(null);

    useFrame((state) => {

        if (!ref.current)
            return;

        const time =
            state.clock.elapsedTime;

        ref.current.position.y =
            1.55 +
            Math.sin(time * 0.8) *
                0.08;

        ref.current.rotation.y =
            Math.sin(time * 0.45) *
                0.06;
    });

    return (
        <group
            ref={ref}
            position={[
                -2.0,
                1.55,
                -0.5,
            ]}
            rotation={[
                0,
                0.15,
                -0.035,
            ]}
        >

            {/* TERMINAL */}

            <mesh>

                <boxGeometry
                    args={[
                        1.75,
                        0.92,
                        0.09,
                    ]}
                />

                <meshPhysicalMaterial
                    color="#060812"
                    metalness={0.85}
                    roughness={0.22}
                    clearcoat={1}
                />

            </mesh>


            {/* SCREEN */}

            <mesh
                position={[
                    0,
                    0,
                    0.06,
                ]}
            >

                <planeGeometry
                    args={[
                        1.56,
                        0.73,
                    ]}
                />

                <meshBasicMaterial
                    color="#02050b"
                />

            </mesh>


            {/* TOP DOTS */}

            <mesh
                position={[
                    -0.62,
                    0.31,
                    0.075,
                ]}
            >

                <sphereGeometry
                    args={[
                        0.035,
                        12,
                        12,
                    ]}
                />

                <meshBasicMaterial
                    color="#22d3ee"
                />

            </mesh>


            <mesh
                position={[
                    -0.51,
                    0.31,
                    0.075,
                ]}
            >

                <sphereGeometry
                    args={[
                        0.035,
                        12,
                        12,
                    ]}
                />

                <meshBasicMaterial
                    color="#8b5cf6"
                />

            </mesh>


            {/* CODE */}

            <Text
                position={[
                    -0.55,
                    0.14,
                    0.08,
                ]}
                fontSize={0.075}
                color="#22d3ee"
                anchorX="left"
            >
                {"const developer ="}
            </Text>

            <Text
                position={[
                    -0.55,
                    -0.01,
                    0.08,
                ]}
                fontSize={0.075}
                color="#a78bfa"
                anchorX="left"
            >
                {"  build('software');"}
            </Text>

            <Text
                position={[
                    -0.55,
                    -0.16,
                    0.08,
                ]}
                fontSize={0.075}
                color="#64748b"
                anchorX="left"
            >
                {"// ship something great"}
            </Text>

        </group>
    );
}


// ============================================================
// FLOATING TECH CUBES
// ============================================================

function TechBlock({
    position,
    color,
    scale = 1,
}: {
    position: Vec3;
    color: string;
    scale?: number;
}) {

    const ref =
        useRef<THREE.Mesh>(null);

    const baseY =
        position[1];

    useFrame((state) => {

        if (!ref.current)
            return;

        const time =
            state.clock.elapsedTime;

        ref.current.rotation.x =
            time * 0.35;

        ref.current.rotation.y =
            time * 0.55;

        ref.current.position.y =
            baseY +
            Math.sin(
                time * 1.1 +
                position[0]
            ) *
                0.12;
    });

    return (
        <mesh
            ref={ref}
            position={position}
            scale={scale}
        >

            <boxGeometry
                args={[
                    0.28,
                    0.28,
                    0.28,
                ]}
            />

            <meshPhysicalMaterial
                color={color}
                emissive={color}
                emissiveIntensity={1.7}
                metalness={0.85}
                roughness={0.12}
                clearcoat={1}
            />

        </mesh>
    );
}


// ============================================================
// DATA PARTICLES
// ============================================================

function DeveloperParticles() {

    return (
        <>

            <Sparkles
                count={220}
                scale={[
                    9,
                    6,
                    6,
                ]}
                size={1.4}
                speed={0.22}
                color="#6366f1"
            />

            <Sparkles
                count={120}
                scale={[
                    7,
                    5,
                    5,
                ]}
                size={1.1}
                speed={0.38}
                color="#22d3ee"
            />

            <Sparkles
                count={70}
                scale={[
                    5,
                    4,
                    4,
                ]}
                size={1.2}
                speed={0.18}
                color="#a78bfa"
            />

        </>
    );
}


// ============================================================
// ENERGY WAVE
// ============================================================

function EnergyWave() {

    const ref =
        useRef<THREE.Mesh>(null);

    useFrame((state) => {

        if (!ref.current)
            return;

        const time =
            state.clock.elapsedTime;

        const progress =
            (time * 0.22) % 1;

        const scale =
            1 +
            progress * 3;

        ref.current.scale.setScalar(
            scale
        );

        const material =
            ref.current.material as
                THREE.MeshBasicMaterial;

        material.opacity =
            0.14 *
            (1 - progress);
    });

    return (
        <mesh ref={ref}>

            <ringGeometry
                args={[
                    1.15,
                    1.17,
                    96,
                ]}
            />

            <meshBasicMaterial
                color="#6366f1"
                transparent
                opacity={0.14}
                side={THREE.DoubleSide}
                depthWrite={false}
            />

        </mesh>
    );
}


// ============================================================
// CAMERA
// ============================================================

function DeveloperCamera() {

    useFrame((state) => {

        const time =
            state.clock.elapsedTime;

        const camera =
            state.camera;

        camera.position.x =
            Math.sin(time * 0.10) *
                0.18;

        camera.position.y =
            Math.cos(time * 0.13) *
                0.08;

        camera.position.z = 8;

        camera.lookAt(
            0,
            0,
            0
        );
    });

    return null;
}


// ============================================================
// SCENE
// ============================================================

function Scene() {

    return (
        <>

            {/* =================================================
                LIGHTING
            ================================================= */}

            <ambientLight
                intensity={0.8}
            />

            <pointLight
                position={[
                    -4,
                    4,
                    5,
                ]}
                intensity={65}
                distance={9}
                color="#6366f1"
            />

            <pointLight
                position={[
                    4,
                    -3,
                    4,
                ]}
                intensity={50}
                distance={8}
                color="#06b6d4"
            />

            <pointLight
                position={[
                    0,
                    0,
                    3,
                ]}
                intensity={30}
                distance={5}
                color="#ffffff"
            />


            {/* =================================================
                CENTER DEVELOPER SYSTEM
            ================================================= */}

            <group
                position={[
                    0,
                    0,
                    -1,
                ]}
            >

                <DeveloperCore />

                <OrbitalSystem />

                <DeveloperNetwork />

                <EnergyWave />

            </group>


            {/* =================================================
                DEVELOPER TECH
            ================================================= */}

            <TechLabels />

            <FloatingTerminal />


            {/* =================================================
                FLOATING BLOCKS
            ================================================= */}

            <TechBlock
                position={[
                    -3.35,
                    -1.65,
                    -1.2,
                ]}
                color="#22d3ee"
                scale={0.9}
            />

            <TechBlock
                position={[
                    3.45,
                    -1.55,
                    -1.5,
                ]}
                color="#8b5cf6"
                scale={0.75}
            />

            <TechBlock
                position={[
                    3.3,
                    2.0,
                    -2,
                ]}
                color="#6366f1"
                scale={0.7}
            />

            <TechBlock
                position={[
                    -3.5,
                    1.8,
                    -2,
                ]}
                color="#06b6d4"
                scale={0.55}
            />


            {/* =================================================
                PARTICLES
            ================================================= */}

            <DeveloperParticles />


            {/* =================================================
                CAMERA
            ================================================= */}

            <DeveloperCamera />

        </>
    );
}


// ============================================================
// CANVAS
// ============================================================

export default function SpaceScene() {

    return (
        <Canvas
            dpr={[
                1,
                1.5,
            ]}
            camera={{
                position: [
                    0,
                    0,
                    8,
                ],
                fov: 45,
            }}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference:
                    "high-performance",
            }}
        >

            <Scene />

        </Canvas>
    );
}