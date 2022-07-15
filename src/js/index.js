let started = false;
let waiting = false;
let clicks = 0;
let time = 10;

const score = document.getElementById('score');

function start() {
    started = true;

    let interval = setInterval(() => {
        --time;

        if (time === 0) {
            waiting = true;

            clearInterval(interval);

            score.innerText = `You made ${clicks * 6 / 60} CPS.`;

            setTimeout(() => {
                score.innerText = '10s | 0 Clicks';

                time = 10;
                
                started = false;
                waiting = false;
            }, 5000);

            clicks = 0;

            return;
        };

        score.innerText = `${time}s | ${clicks} Clicks`;
    }, 1000);
};

const click_zone = document.getElementById('click-zone');

click_zone.addEventListener('click', function () {
    if (!started) start();

    if (!waiting) {
        ++clicks;
    
        score.innerText = `${time}s | ${clicks} Clicks`;
    };
});