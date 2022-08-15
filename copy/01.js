let playerStateCharts = "";
let playerStateTs = 0;

let comStateCharts = "";
let comStateTs = 0;

let resultsTs = 0;
let winTs = 0;
let defaultTs = 0;
let drawTs = 0;

function playTs(num) {
    if (num == 1){
        playerStateCharts = "가위";
        playerStateTs = 1;
    }
    else if (num == 2) {
        playerStateCharts = "바위";
        playerStateTs = 2;
    }
    else if (num == 3) {
        playerStateCharts = "보";
        playerStateTs = 3;
    }

    setComStateTs();
    setDistinctTs();
    showResultTs();
}

function setComStateTs(){
    let state = Math.floor(Math.random() * 3) + 1;
    comStateTs = state;
    if (state == 1){
        comStateCharts = "가위";
    }
    else if (state == 2) {
        comStateCharts = "바위";
    }
    else {
        comStateCharts = "보";
    }
}

function setDistinctTs() {
    if (playerStateTs == comStateTs) {
        resultsTs = 0;
    }
    else {
        if (playerStateTs == 1) {
            if (comStateTs == 2){
                resultsTs = -1;
            }
            else if (comStateTs == 3) {
                resultsTs = 1;
            }
        }
        else if (playerStateTs == 2) {
            if (comStateTs == 1) {
                resultsTs = 1;
            }
            else if (playerStateTs == 3) {
                resultsTs = -1;
            }
        }
        else if (playerStateTs == 3) {
            if (comStateTs == 1) {
                resultsTs = -1;
            }
            else if (comStateTs == 2) {
                resultsTs = 1;
            }
        }
    }
}

function showResultTs() {
    if (resultsTs == 0) {
        drawTs++;
        alert("당신: " + playerStateCharts + "\n컴퓨터: " + comStateCharts + "\n\n비겼습니다.");
        alert("현재 전적\n승 : " + winTs + "\n패 : " + defaultTs + "\n무 : " + drawTs + "\n\n승률 : " + getWinRatets() + "%");
    }
    else if (resultsTs == 1) {
        winTs++;
        alert("당신 : " + playerStateCharts + "\n컴퓨터 : " + comStateCharts + "\n\n이겼습니다!");
        alert("현재 전적\n승 : " + winTs + "\n패 : " + defaultTs + "\n무 : " + drawTs + "\n\n승률 : " + getWinRatets() + "%");
    }
    else if (resultsTs == -1) {
        defaultTs++;
        alert("당신 : " + playerStateCharts + "\n컴퓨터 : " + comStateCharts + "\n\n졌습니다...");
        alert("현재 전적\n승 : " + winTs + "\n패 : " + defaultTs + "\n무 : " + drawTs + "\n\n승률 : " + getWinRatets() + "%");
    }
    else {
        alert("초기화 되었습니다.");
        alert("현재 전적\n승 : " + winTs + "\n패 : " + defaultTs + "\n무 : " + drawTs + "\n\n승률 : " + getWinRatets() + "%");
    }
}

function getWinRatets() {
    let winRate = 0;
    if (winTs != 0){
        winRate = (winTs / (winTs + defaultTs)) * 100;
    }
    else {
        winRate = 0;
    }
    return winRate;
}

// html DOM요소 설정. 
let $resetTs = document.getElementById('reset');
$resetTs.addEventListener('click', function() {
    winTs = 0;
    drawTs = 0;
    defaultTs = 0;
    resultsTs = -2;
    showResultTs();
});
