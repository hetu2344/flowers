import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

/**
 * tsParticles Configuration Object
 * Extracted outside the component to keep the logic clean.
 */
const particlesConfig = {
  background: {
    color: "#000000",
    // image: "url('https://particles.js.org/images/background3.jpg')",
    size: "cover",
    position: "center center",
    repeat: "no-repeat",
  },
  backgroundMask: {
    enable: false,
    cover: { color: { value: "#000000" } },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "trail" },
    },
    modes: {
      push: { quantity: 4 },
      trail: {
        delay: 0.001,
        quantity: 2,
        pauseOnStop: true,
        particles: {
        //   canvasResourceId: "default",
        //   groups: ["solidGroup"],
          color: { value: "random" },
          shape: { type: "circle" },
          size: { value: { min: 3, max: 5 } },
          life: {
            duration: { sync: false, value: 3 },
            count: 1,
          },
          move: { speed: 2.5 },
        },
      },
    },
  },
  particles: {
    color: { value: "random" },
    links: { enable: false }, // Disabled for trail focus
    move: {
      enable: true,
      direction: "none",
      outModes: { default: "bounce" },
      speed: 6,
    },
    number: {
      density: { enable: true },
      value: 1,
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

const Screen = () => {
  const [init, setInit] = useState(false);

  // Initialize the particles engine once
  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        // loadFull includes all interactions (including trail)
        await loadFull(engine);
      });
      setInit(true);
    };

    initEngine();
  }, []);

  const particlesLoaded = (container) => {
    // container instance is ready
  };

  // useMemo ensures options aren't re-calculated on every render
  const options = useMemo(() => particlesConfig, []);

  // Show nothing until engine is initialized
  if (!init) return null;

  return (
    <div className="App" style={{ height: "100vh" }}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default Screen;
