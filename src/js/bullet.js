import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Enemy} from "./enemy.js";

export class Bullet extends Actor{
    constructor(spawnPoint) {
        super({
            width:Resources.Bullet.width,
            height:Resources.Bullet.height,
        })
        this.pos = spawnPoint
        this.vel = new Vector(600,0)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Bullet.toSprite())
        this.on('collisionstart', (event) => {
            if(event.other instanceof Enemy) {
                event.other.kill()
                console.log("you killed the enemy!")
            }
        })
    }
}