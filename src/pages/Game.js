import './Game.css';
import React, { Component } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
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
                <iframe frameborder="0" src="https://itch.io/embed-upload/6854068?color=d1a4a4" allowfullscreen="" width="1136" height="660" className='game-frame'><a href="https://crimsonblade05.itch.io/iecse-gbm">Play IECSE GBM on itch.io</a></iframe>
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
            <div className='rpgui-content' id="button-cont">
                <Link to="/end">
                    <button class="rpgui-button" type="button" id="game-button" onClick={start}>
                        <div className='blink_me'>
                            <p>Next!</p>
                        </div>
                    </button>
                </Link>
            </div>
        </div>

    );

}

export default Game;