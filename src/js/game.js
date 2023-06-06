import '../css/style.css'
import {Engine, Physics, Vector} from "excalibur"
import {ResourceLoader} from './resources.js'
import {Level1} from "./level1.js";
import {StartScreen} from "./startScreen.js";
import {EndScreen} from "./endscreen.js";

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true)
        this.debug.transform.showAll = true
    }

    startGame() {
        console.log("start de game!")
        this.addScene('level1', new Level1())
        this.addScene('startScreen', new StartScreen())
        this.addScene('endScreen', new EndScreen())
        this.goToScene('startScreen')

        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, 1200)
    }
}

new Game()
