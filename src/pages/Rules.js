import './Rules.css';
import { Link } from "react-router-dom";
import user1 from "../Images/rotate-smartphone.png";
import user2 from "./game-start.mp3"

function Rules() {
    let audio = new Audio(user2);
    const start = () => {
        audio.play()
    }
    return (
        <div className='rpgui-content'>
            <div className="rpgui-container framed" id="rules-main-cont">
                <div class="rpgui-container framed-golden-2" id="rules-cont">
                    <ul>
                        <li>Tap the screen to fly</li>
                        <li>Collect the coins</li>
                        <li>Good luck!</li>
                    </ul>
                </div>
                <div className='rpgui-container framed-golden' id="rules-cont2">
                    <p>Please turn your phone for a better experience</p>
                    <img src={user1} className="tilt-img"></img>
                </div>
                <Link to="/Game">
                    <button class="rpgui-button" type="button" id="rules-button" onClick={start}>
                        <div className='blink_me'>
                            <p>Play!</p>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Rules;