import {Actor, Vector, Input, CollisionType} from "excalibur";
import {Resources} from "./resources.js";

export class Coral extends Actor {
    constructor() {
        super({
            width:Resources.Coral.width, height:Resources.Coral.height,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Coral.toSprite())
    }
}