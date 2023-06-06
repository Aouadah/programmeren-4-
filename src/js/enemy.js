import {Actor} from "excalibur";
import {Resources} from "./resources.js";
import {Mega} from "./megaman.js";

export class Enemy extends Actor {
    constructor() {
        super({
            width:Resources.Enemy.width,
            height:Resources.Enemy.height,
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Enemy.toSprite())
        this.on('collisionstart', (event) => {
            if(event.other instanceof Mega) {
                event.other.kill()
                console.log("you died")
            }
        })
    }
}