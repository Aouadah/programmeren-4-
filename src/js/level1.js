import {Scene, Vector} from 'excalibur';
import {Mega} from "./megaman.js";
import {Ground} from "./ground.js";
import {Flag} from "./flag.js";
import {Bullet} from "./bullet.js";
import {Enemy} from "./enemy.js";

export class Level1 extends Scene {
    addBullet(spawnPoint) {
        this.add(new Bullet(spawnPoint))
    }

    onInitialize(engine) {
        console.log("level 1 is created")
        const mega = new Mega()
        mega.pos = new Vector(100, 150)
        this.add(mega)

        const floor = new Ground()
        floor.pos = new Vector(130, 600)
        this.add(floor)

        const blocks = new Ground()
        blocks.pos = new Vector(770, 478)
        this.add(blocks)

        const flag = new Flag()
        flag.pos = new Vector(740, 286)
        this.add(flag)

        const enemy = new Enemy()
        enemy.pos = new Vector(560, 310)
        this.add(enemy)
    }
}