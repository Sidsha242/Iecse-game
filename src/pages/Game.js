import './Game.css';

function Game() {
    return (
        <div id="container">
            <p id="orientation-status"></p>
            <div id="buttons-container">
                <button id="lock-landscape-button">Lock to Landscape Mode</button>
                <button id="unlock-button">Unlock</button>
            </div>
            <Rotate />
        </div>

    );

    function Rotate() {
        var _LOCK_BUTTON = document.querySelector("#lock-landscape-button"),
            _UNLOCK_BUTTON = document.querySelector("#unlock-button"),
            _STATUS = document.querySelector("#orientation-status");

        _STATUS.innerHTML = window.screen.orientation.type + ' mode';

        // upon lock to landscape-primary mode
        document.querySelector("#lock-landscape-button").addEventListener('click', function () {
            if (document.documentElement.requestFullscreen)
                document.querySelector("#container").requestFullscreen();
            else if (document.documentElement.webkitRequestFullScreen)
                document.querySelector("#container").webkitRequestFullScreen();

            window.screen.orientation.lock("landscape-primary")
                .then(function () {
                    _LOCK_BUTTON.style.display = 'none';
                    _UNLOCK_BUTTON.style.display = 'block';
                })
                .catch(function (error) {
                    alert(error);
                });
        });

        // upon unlock
        document.querySelector("#unlock-button").addEventListener('click', function () {
            window.screen.orientation.unlock();

            _LOCK_BUTTON.style.display = 'block';
            _UNLOCK_BUTTON.style.display = 'none';
        });

        // when screen orientation changes
        window.screen.orientation.addEventListener("change", function () {
            _STATUS.innerHTML = window.screen.orientation.type + ' mode';
        });

        // on exiting full-screen lock is automatically released
        document.addEventListener("fullscreenchange", function () {
            _LOCK_BUTTON.style.display = 'block';
            _UNLOCK_BUTTON.style.display = 'none';
        });

        // for Chrome & Safari
        document.addEventListener("webkitfullscreenchange", function () {
            _LOCK_BUTTON.style.display = 'block';
            _UNLOCK_BUTTON.style.display = 'none';
        });
    }
}
export default Game;