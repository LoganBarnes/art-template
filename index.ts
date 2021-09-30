import { Scene, Vector3, Engine, ArcRotateCamera, MeshBuilder, HemisphericLight } from 'babylonjs';
import { GLTF2Export } from 'babylonjs-serializers';
import Art from './art';

const canvas = document.getElementById(`canvas`); // Get the canvas element
if (canvas === null) {
    throw Error(`Could not find canvas element`);
}

// Generate the 3D engine
const engine = new Engine(canvas as HTMLCanvasElement, true);

const scene = new Scene(engine);

// Default camera
const camera = new ArcRotateCamera(`camera`, -Math.PI / 2, Math.PI / 2.5, 15, new Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);

// Custom class
const art = new Art(scene);

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(() => {
    art.update(scene);
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener(`resize`, function () {
    engine.resize();
});

// Save the scene as a .GLB file when 's' is pressed
document.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key == `s`) {
        GLTF2Export.GLBAsync(scene, `gravity`).then((glb) => {
            glb.downloadFiles();
        });
    }
});