import {Actor, Scene, Vector} from 'excalibur'
import {Resources} from "./resources.js";
import {Button} from "./button.js";

export class StartScreen extends Scene {
    onInitialize(engine) {
        console.log("start screen is created")

        const button = new Button()
        button.graphics.use(Resources.Button.toSprite())
        button.pos = new Vector(400, 500)
        this.add(button)

        const logo = new Actor()
        logo.graphics.use(Resources.Logo.toSprite())
        logo.pos = new Vector(400, 100)
        this.add(logo)

        button.on("pointerup", (event) => {
            engine.goToScene('level1')
        })
    }
}