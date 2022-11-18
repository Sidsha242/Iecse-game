import './Game.css';
import React, { Component } from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

const Game = () => (
    <DeviceOrientation lockOrientation={'landscape'}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation='landscape' alwaysRender={false}>
            <div>
                <div className='rpgui-content'>
                    <div className='game-cont-land'>
                        <p>This is landscape mode</p>
                    </div>
                </div>
            </div>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation='portrait'>
            <div>
                <div className='rpgui-content'>
                    <div className='game-cont-pot'>
                        <p>Please rotate your device!</p>
                    </div>
                </div>
            </div>
        </Orientation>
    </DeviceOrientation>
)
export default Game;