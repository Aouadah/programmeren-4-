import {Scene, Vector} from 'excalibur'
import {Coral} from "./coral.js";
import {Resources} from "./resources.js";
import {Mega} from "./megaman.js";
import {Ground} from "./ground.js";
import {Flag} from "./flag.js";
import {Bullet} from "./bullet.js";

export class Level1 extends Scene {
    addBullet(spawnPoint) {
        this.add(new Bullet(spawnPoint))
    }

    onInitialize(engine) {
        console.log("level 1 is created")
        const mega = new Mega()
        mega.graphics.use(Resources.Mega.toSprite())
        mega.pos = new Vector(100, 150)
        this.add(mega)

        const coral = new Coral()
        coral.graphics.use(Resources.Coral.toSprite())
        coral.pos = new Vector(650, 500)
        this.add(coral)

        const ground = new Ground()
        ground.graphics.use(Resources.Ground.toSprite())
        ground.pos = new Vector(100, 600)
        this.add(ground)

        const flag = new Flag()
        flag.graphics.use(Resources.Flag.toSprite())
        flag.pos = new Vector(740, 286)
        this.add(flag)
    }
}