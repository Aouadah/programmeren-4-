import { Actor, Vector, Input, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class Mega extends Actor {
    constructor() {
        super({
            width: Resources.Mega.width,
            height: Resources.Mega.height,
            collisionType: CollisionType.Active,
        });
        this.body.useGravity = true;
    }

    onInitialize(engine) {
        this.game = engine
        this.graphics.use(Resources.Mega.toSprite())
    }

    shoot(){
        this.game.currentScene.addBullet(this.pos)
        console.log("pew")
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.shoot();
        }

        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.wasPressed(Input.Keys.Up)) {
            yspeed = -600;
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
            xspeed = -250;
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
            xspeed = 250;
        }
        this.vel = this.vel.add(new Vector(xspeed, yspeed));
        this.vel.x = xspeed;
    }
}