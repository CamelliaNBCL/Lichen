import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import LichenParticles from './components/LichenParticles';
import UI from './components/UI';
import { AppMode, ParticleConfig, PRESETS, Preset } from './types';

function App() {
  const [mode, setMode] = useState<AppMode>(AppMode.IMMERSIVE);
  const [activePreset, setActivePreset] = useState<string>(PRESETS[0].name);
  const [config, setConfig] = useState<ParticleConfig>(PRESETS[0].config);

  const handleApplyPreset = (preset: Preset) => {
    setActivePreset(preset.name);
    setConfig(preset.config);
  };

  return (
    <div className="w-full h-screen bg-slate-900 relative overflow-hidden">
      
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
          
          <Suspense fallback={null}>
            <LichenParticles config={config} />
          </Suspense>

          {/* 
            Immersive mode: restricted controls for more "artistic" feel.
            Dashboard mode: full orbit controls for inspection.
          */}
          <OrbitControls 
            enableZoom={mode === AppMode.DASHBOARD}
            enablePan={false}
            autoRotate={mode === AppMode.IMMERSIVE}
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            dampingFactor={0.05}
          />
          
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>

      {/* UI Overlay Layer */}
      <UI 
        mode={mode} 
        setMode={setMode} 
        config={config} 
        setConfig={setConfig} 
        activePreset={activePreset}
        applyPreset={handleApplyPreset}
      />

    </div>
  );
}

export default App;