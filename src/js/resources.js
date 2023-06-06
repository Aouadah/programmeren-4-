import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import megaImage from '../images/mega.png'
import groundImage from '../images/groundpixel.png'
import buttonImage from '../images/startbutton.png'
import bulletImage from '../images/bullet.png'
import coralImage from '../images/coral.png'
import logoImage from '../images/logo.png'
import flagImage from '../images/flag.png'
import winImage from '../images/winText.png'

const Resources = {
    Mega: new ImageSource(megaImage),
    Ground: new ImageSource(groundImage),
    Button: new ImageSource(buttonImage),
    Bullet: new ImageSource(bulletImage),
    Coral: new ImageSource(coralImage),
    Logo: new ImageSource(logoImage),
    Flag: new ImageSource(flagImage),
    Win: new ImageSource(winImage),
}
const ResourceLoader = new Loader([
    Resources.Mega,
    Resources.Ground,
    Resources.Button,
    Resources.Bullet,
    Resources.Coral,
    Resources.Logo,
    Resources.Flag,
    Resources.Win,
])

export { Resources, ResourceLoader }