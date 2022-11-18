import './Home.css';
import { Link } from "react-router-dom";
import user2 from "./game-start.mp3"

function Home() {
    let audio = new Audio(user2);
    const start = () => {
        audio.play()
    }
    return (
        <div className='rpgui-content'>
            <div className="rpgui-container framed" id="home-cont">
                <div class="rpgui-content" id="home-title">
                    <h1>IECSE</h1>
                </div>
                <div id="home-txt">
                    <p>The offical Computer Science Club of Manipal !</p>
                </div>
                <Link to="/Rules">
                    <button class="rpgui-button" type="button" id="home-button" onClick={start}>
                        <div className='blink_me'>
                            <p>Play Game!</p>
                        </div>
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Home;