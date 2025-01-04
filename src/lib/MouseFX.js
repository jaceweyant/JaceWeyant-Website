
import * as THREE from "three";
import Maths from "./Maths";
var MouseFX = class {
    constructor() {

        this.mouseX = 0;
        this.mouseY = 0;

        this.pointX = 0;
        this.pointY = 0;

        this.planeWidth = -Math.PI / 2;
        this.planeHeight = Math.PI / 2;

        this.rotation = new THREE.Vector3(0.0, 0.0, 0.0);
        //window.addEventListener("mousemove", this.lookToPoint.bind(this));
    }

    lookToPoint(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.pointX = Maths.map(this.mouseX, 0, window.innerWidth, -this.planeWidth / 2, this.planeWidth / 2);
        this.pointY = Maths.map(this.mouseY, 0, window.innerHeight, -this.planeHeight / 2, this.planeHeight / 2);
        this.rotation.set(this.pointX, this.pointY, 0);
    }
}

export default MouseFX