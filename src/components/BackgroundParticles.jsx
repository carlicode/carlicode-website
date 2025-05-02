import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Particles } from "react-tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#1A1A1A" },
        fpsLimit: 60,
        particles: {
          color: { value: "#00F8A9" },
          links: {
            color: "#FF4EB5",
            distance: 130,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: { value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
      }}
      
    />
  );
}
