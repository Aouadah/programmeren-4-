import {Actor, CollisionType} from "excalibur";
import {Resources} from "./resources.js";

export class Blocks extends Actor {
    constructor() {
        super({
            width:Resources.Blocks.width, height:Resources.Blocks.height,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Blocks.toSprite())
    }
}