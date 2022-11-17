import './Home.css';

function Home() {
    return (
        <div className='rpgui-content'>
            <div className="rpgui-container framed" id="home-cont">
                <div class="rpgui-content" id="home-title">
                    <h1>IECSE</h1>
                </div>

                <button class="rpgui-button" type="button" id="home-button">
                    <div className='blink_me'>
                        <p>Play Game!</p>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Home;