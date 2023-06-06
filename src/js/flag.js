import {Actor} from "excalibur";
import {Resources} from "./resources.js";
import {Mega} from "./megaman.js";

export class Flag extends Actor {
    constructor() {
        super({
            width:Resources.Flag.width, height:Resources.Flag.height,
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Flag.toSprite())
        this.on('collisionstart', (event) => {
            if(event.other instanceof Mega) {
                engine.goToScene('endScreen', {score: 10 })
            }
        })
    }
}