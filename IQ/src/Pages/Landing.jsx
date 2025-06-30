import React from 'react';
import './Landing.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';

function SpinningCube() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh rotation={[0.4, 0.2, 0]} castShadow receiveShadow>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={'#764ba2'} metalness={0.6} roughness={0.3} />
            </mesh>
        </Float>
    );
}

function Landing() {
    return (
        <div className="landing-container">
            <div className="landing-3d">
                <Canvas camera={{ position: [0, 0, 7], fov: 50 }} shadows>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                    <SpinningCube />
                    <Center position={[0, -2.5, 0]}>
                        <Text3D font="/fonts/helvetiker_regular.typeface.json" size={0.7} height={0.2} curveSegments={12} bevelEnabled bevelSize={0.04} bevelThickness={0.04}>
                            IQ-Test
                            <meshStandardMaterial color="#667eea" />
                        </Text3D>
                    </Center>
                    <OrbitControls enablePan={false} enableZoom={false} />
                </Canvas>
            </div>
            <h1>Welcome to IQ-Test</h1>
            <p>Challenge your mind with our Maths and English IQ tests. Get started now!</p>
            <a href="/create-test" className="landing-btn">Create Your Own IQ Test</a>
        </div>
    );
}

export default Landing;