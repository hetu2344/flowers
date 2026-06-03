import Screen from "./containers/screen/screen.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Screen />
    </div>
  );
};

export default App;


/*
  Notes on different modes of loading tsParticles:
  - loadAll: loads all the features available in tsParticles, it's the biggest package but the easiest to use
  - loadFull: loads the full tsParticles package, smaller than loadAll but still includes a lot of features
  - loadSlim: loads a slimmed down version of tsParticles, includes the most used features, a good balance between size and functionality
  - loadBasic: loads the most basic features of tsParticles, it's the smallest package but with limited functionality

  This is for particles. Not sure aboout other kinds of interactions like fireworks, confetti, etc.

  Mode	Trigger Type	Behavior Description
    - Push 	    Click	            Adds a specific number of new particles at the event position.
    - Remove 	  Click	            Deletes a specific number of particles from the canvas.
    - Repulse 	Hover / Click	    Forces particles to fly away from the interaction point.
    - Attract 	Hover / Click	    Pulls particles toward the interaction point.
    - Bubble 	  Hover / Click	    Temporarily alters particle size and/or opacity while in range.
    - Grab 	    Hover	            Draws a connecting line between the cursor and nearby particles.
    - Connect 	Hover	            Draws a web-like mesh connecting nearby particles to each other and the cursor.
    - Slow   	  Hover	            Dramatically reduces the speed of particles within a certain radius.
    - Light 	  Hover	            Creates a lighting effect, often used with shadow configurations.
    - Trail 	  Hover / Click	    Leaves a "ghost" path of particles behind the cursor as it moves.

  Notes on different interaction modes:
     modes: {
      push: {
        quantity: 4, // Number of particles to add
      },
      remove: {
        quantity: 2, // Number of particles to remove
      },
      repulse: {
        distance: 200, // Range of repulsion
        duration: 0.4,
      },
      attract: {
        distance: 200,
        speed: 1,
      },
      bubble: {
        distance: 400,
        size: 40,      // Size particles grow to
        duration: 2,
        opacity: 0.8,  // Target opacity
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      slow: {
        factor: 3,     // Speed reduction factor (higher = slower)
        radius: 200,
      },
      trail: {
        delay: 0.1,    // Delay between trail particles
        quantity: 1,
      }
    }
*/