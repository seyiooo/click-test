let started = false;
let waiting = false;
let clicks = 0;
let time = 10;

const timeElement = document.getElementById('time');
const clicksElement = document.getElementById('clicks');
const resultElement = document.getElementById('result');

function start() {
    started = true;

    let interval = setInterval(() => {
        --time;

        if (time === 0) {
            waiting = true;

            clearInterval(interval);

            timeElement.innerText = '';
            clicksElement.innerText = '';

            resultElement.innerText = `${clicks * 6 / 60} CPS`;

            setTimeout(() => {
                timeElement.innerText = '10s';
                clicksElement.innerText = '0 Clicks';
                resultElement.innerText = '';

                time = 10;
                
                started = false;
                waiting = false;
            }, 5000);

            clicks = 0;

            return;
        };

        timeElement.innerText = `${time}s`;
        clicksElement.innerText = `${clicks} Clicks`;
    }, 1000);
};

const click_zone = document.getElementById('click-zone');

click_zone.addEventListener('click', function () {
    if (!started) start();

    if (!waiting) {
        ++clicks;
    
        timeElement.innerText = `${time}s`;
        clicksElement.innerText = `${clicks} Clicks`;
    };
});