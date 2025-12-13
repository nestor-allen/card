import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import "./app.css";

export default function App() {
  return (
    <>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://shadergradient.co/customize?animate=on&axesHelper=off&brightness=3&cAzimuthAngle=180&cDistance=3.49&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.2&uStrength=1.5&uTime=8&wireframe=false"
        />
      </ShaderGradientCanvas>

      <div className="content">
        <div className="links">
          <a href="https://github.com/nestor-allen" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/nestorobiacoro/" target="_blank">
            LinkedIn
          </a>

          <a href="https://cmput401.ca/projects/eed2518f-0fc4-4b29-a172-32ce1c749152" target="_blank">
            PharmaGames</a>
          <a href="https://github.com/CMPUT301F23T18/MyInventory" target="_blank">MyInventory</a>
        </div>
        <div className="email">
          <a href="mailto:obiacoronestor@gmail.com">contact me</a>
        </div>
        <div className="bottom-content">
          <h1 id="header-one">Nestor Allen Obiacoro</h1>
          <h2>Software Engineer | Edmonton Alberta, Canada</h2>
        </div>
      </div>
    </>
  );
}