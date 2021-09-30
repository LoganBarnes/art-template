import { Scene, Vector3, Engine, ArcRotateCamera, MeshBuilder, HemisphericLight } from 'babylonjs';

export default class Art {
    constructor(scene: Scene) {
        MeshBuilder.CreateBox(`box`, {})

        new HemisphericLight(`light`, new Vector3(1, 1, 0), scene);
    }

    public update(_scene: Scene): void {
    }

}
