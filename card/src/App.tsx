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
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=2.4&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=40&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=2.4&uTime=0.2&wireframe=false"
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

          <a href="mailto:obiacoronestor@gmail.com">obiacoronestor@gmail.com</a>
          <a href="https://cmput401.ca/projects/eed2518f-0fc4-4b29-a172-32ce1c749152" target="_blank">
            PharmaGames</a>
          <a href="https://github.com/CMPUT301F23T18/MyInventory" target="_blank">MyInventory</a>
        </div>
        <div className="bottom-content">
          <h1 id="header-one">Nestor Allen Obiacoro</h1>
          <h2>Software Engineer | Edmonton Alberta, Canada</h2>
        </div>
      </div>
    </>
  );
}
