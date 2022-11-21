import './End.css';

function End() {
    return (
        <div>
            <div className='rpgui-content'>
                <div className="rpgui-container framed" id="end-main-cont">
                    <div class="rpgui-container framed-golden-2" id="end-cont">
                        <p>
                            The game has ended..
                            But your journey at IECSE has just begun!
                            Click the button to register for our GBM
                        </p>
                    </div>
                    <button class="rpgui-button" type="button" id="end-button">
                        <div className='blink_me'>
                            <a href="gbm.iecsemanipal.com"><p>Sign Up!</p></a>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
}


export default End;