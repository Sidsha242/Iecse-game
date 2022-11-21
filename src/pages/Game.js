import './Game.css';
import user2 from "./game-start.mp3"
import { Link } from "react-router-dom";

function Game() {
    let audio = new Audio(user2);
    const start = () => {
        audio.play()
    }
    // window.location.href = "https://crimsonblade05.itch.io/iecse-gbm";
    return (
        <div>
            <div className='game-cont-land'>
                {/* <iframe allowfullscreen="true" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" id="game_drop" scrolling="no" frameborder="0" width="1136" height="660" className='game-frame'><a href="https://game.iecsemanipal.com"></a></iframe> */}
                {/* <embed src="https://game.iecsemanipal.com/" style="width:1136; height: 660px;"></embed> */}
                {/* <iframe src="https://game.iecsemanipal.com" title="description"></iframe> */}
                {/* <iframe src="https://i.simmer.io/@sdr24/iecse-jetpackjoyride" style="width:960px;height:600px"></iframe> */}
                <iframe id="game-frame"
                    title="IECSE Game"
                    allowfullscreen="true"
                    frameborder="0" width="1136" height="660"
                    scrolling="no"
                    src="https://play.iecsemanipal.com/">
                </iframe>
            </div>
            {/* <div>
                <div className='rpgui-content'>
                    <div className='game-cont-pot'>
                        <div id="text-cont-game">
                            <p>Please rotate your device...</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <Link to="/end">
                <div className='rpgui-content' id="button-cont">
                    <button class="rpgui-button" type="button" id="game-button" onClick={start}>
                        <div className='blink_me'>
                            <p>Quit!</p>
                        </div>
                    </button>
                </div>
            </Link>
        </div>
    );

}

export default Game;