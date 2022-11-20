import './Game.css';
import React, { Component } from 'react';
import user2 from "./game-start.mp3"
import { Link } from "react-router-dom";

function Game() {
    let audio = new Audio(user2);
    const start = () => {
        audio.play()
    }
    return (
        <div>
            <div className='game-cont-land'>
                {/* <p>This is landscape mode.This should be displayed when phone is in landscape</p> */}
                <iframe /*allowfullscreen="true"*/ allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" id="game_drop" scrolling="no" frameborder="0" src="https://itch.io/embed-upload/6857248?color=333333" allowfullscreen="" width="1136" height="660" className='game-frame'><a href="https://crimsonblade05.itch.io/iecse-gbm"></a></iframe>
            </div>

            <div>
                <div className='rpgui-content'>
                    <div className='game-cont-pot'>
                        <div id="text-cont-game">
                            <p>Please rotate your device...</p>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/end">
                {/* <div className='rpgui-content' id="button-cont"> */}
                <button class="rpgui-button" type="button" id="game-button" onClick={start}>
                    <div className='blink_me'>
                        <p>Next!</p>
                    </div>
                </button>
                {/* </div> */}
            </Link>
        </div>

    );

}

export default Game;