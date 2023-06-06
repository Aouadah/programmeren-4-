import {Actor, Scene, Vector, Label, FontUnit, Font} from "excalibur";
import {Resources} from "./resources.js";

export class EndScreen extends Scene {
    onInitialize(engine) {
        console.log("end screen is created")

        const win = new Actor()
        win.graphics.use(Resources.Win.toSprite())
        win.pos = new Vector(400, 100)
        this.add(win)

        let label = new Label({
            text: 'Score: 0',
            pos: new Vector(350, 400),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(label)
        label.text = 'Score: 10'
    }

    onActivate(ctx) {
        if(ctx.data) {
            console.log(`SCORE: ${ctx.data.score}`)
        }
    }
}