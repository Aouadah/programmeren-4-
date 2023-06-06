import {Actor, CollisionType} from "excalibur";
import {Resources} from "./resources.js";

export class Ground extends Actor {
    constructor() {
        super({
            width:Resources.Ground.width, height:Resources.Ground.height,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ground.toSprite())
    }
}