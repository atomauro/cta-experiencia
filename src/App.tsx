import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import "./folio/src/index.js";
import headerImage from './LOGOCTA1.png'; // Ruta a tu imagen de encabezado


function ThreeScene() {
  return (
    <>
    <Header/>
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <OrbitControls />
    </Canvas>
    </>
  );
}

function Header(){
  return(
    <div className="header">
    <div className="header-text">
      <h1>WEB</h1>
    </div>
    <img src={headerImage} alt="Header" className="header-image" />
    <div className="header-buttons">
      <button className="round-button">CREEMOS JUNTOS</button>
    </div>
  </div>
  )
}

function App() {
  return (
    <div className="App h-screen">
      <ThreeScene />
    </div>
  );
}

export default App;
