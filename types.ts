export type Vector3 = [number, number, number];

export enum AppMode {
  IMMERSIVE = 'IMMERSIVE',
  DASHBOARD = 'DASHBOARD'
}

export interface ParticleConfig {
  colorA: string;
  colorB: string;
  spread: number; // 0 to 1
  density: number; // 0 to 1
  speed: number; // 0 to 1
  chaos: number; // 0 to 1
}

export interface Preset {
  name: string;
  config: ParticleConfig;
}

export const PRESETS: Preset[] = [
  {
    name: "Icelandic Moss",
    config: {
      colorA: "#86efac", // light green
      colorB: "#0ea5e9", // sky blue
      spread: 0.5,
      density: 0.6,
      speed: 0.2,
      chaos: 0.3
    }
  },
  {
    name: "Volcanic Lichen",
    config: {
      colorA: "#fdba74", // orange
      colorB: "#ef4444", // red
      spread: 0.8,
      density: 0.4,
      speed: 0.6,
      chaos: 0.7
    }
  },
  {
    name: "Deep Forest",
    config: {
      colorA: "#14532d", // dark green
      colorB: "#a3e635", // lime
      spread: 0.3,
      density: 0.9,
      speed: 0.1,
      chaos: 0.2
    }
  },
  {
    name: "Arctic Frost",
    config: {
      colorA: "#e2e8f0", // slate 200
      colorB: "#6366f1", // indigo
      spread: 0.7,
      density: 0.5,
      speed: 0.15,
      chaos: 0.4
    }
  }
];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      shaderMaterial: any;
      ambientLight: any;
    }
  }
}