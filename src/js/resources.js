import { ImageSource, Loader } from 'excalibur'
import megaImage from '../images/mega.png'
import groundImage from '../images/groundpixel.png'
import buttonImage from '../images/startbutton.png'
import bulletImage from '../images/bullet.png'
import logoImage from '../images/logo.png'
import flagImage from '../images/flag.png'
import winImage from '../images/winText.png'
import enemyImage from '../images/metall.png'

const Resources = {
    Mega: new ImageSource(megaImage),
    Ground: new ImageSource(groundImage),
    Button: new ImageSource(buttonImage),
    Bullet: new ImageSource(bulletImage),
    Logo: new ImageSource(logoImage),
    Flag: new ImageSource(flagImage),
    Win: new ImageSource(winImage),
    Enemy: new ImageSource(enemyImage),
}
const ResourceLoader = new Loader([
    Resources.Mega,
    Resources.Ground,
    Resources.Button,
    Resources.Bullet,
    Resources.Logo,
    Resources.Flag,
    Resources.Win,
    Resources.Enemy,
])

export { Resources, ResourceLoader }