import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Bullet extends Actor{
    constructor(spawnPoint) {
        super()
        this.pos = spawnPoint
        this.vel = new Vector(600,0)
        this.graphics.use(Resources.Bullet.toSprite())
    }
}