
'use strict'

var gQuests = [];
var gCurrQuestIdx;
var gOptsNum = 2;

function createQuest() {
    gQuests = [
        { id: 1, opts: ['Clouds', 'Stars'], correctOptIdx: 1 },
        { id: 2, opts: ['Sea', 'Stars'], correctOptIdx: 2 },
        { id: 3, opts: ['Snail', 'Catterpilar'], correctOptIdx: 2 },
        { id: 4, opts: ['Fire', 'Water'], correctOptIdx: 1 },
    ]
}

function init() {
    gCurrQuestIdx = 0;
    createQuest();
    rednerPics();
    rederQuest();

}

function checkAnswer(elOpt, userAnswerIdx) {

    var correctAnswerIdx = gQuests[gCurrQuestIdx].correctOptIdx;

    if (userAnswerIdx === correctAnswerIdx) {
        if (gCurrQuestIdx < gQuests.length - 1) {
            gCurrQuestIdx++;
            rederQuest();
            rednerPics();

        } else victory();
    } else {
        elOpt.style.backgroundColor = 'rgb(255, 42, 42)'
    }
}

function victory() {
    document.querySelector('.opts-div').style.display = 'none';
    document.querySelector('.pic-div').style.display = 'none';
    document.querySelector('.modal').style.display = 'block';
}

function rederQuest() {
    
    var strHTML = '';
    var currOpts = gQuests[gCurrQuestIdx].opts;

    for (var i = 0; i < gOptsNum; i++) {
        strHTML += `<button onclick="checkAnswer(this, ${i + 1})" 
        class="opts">${currOpts[(i)]}</button> <br>`
    }
    var elOptDiv = document.querySelector('.opts-div');
    elOptDiv.innerHTML = strHTML;
}

function rednerPics() {
    var strHTML = `<img class="opt${(gCurrQuestIdx + 1)}"
    src="/img/${(gCurrQuestIdx + 1)}.jpg" alt="">`

    var elPicDiv = document.querySelector('.pic-div');
    elPicDiv.innerHTML = strHTML;
}

function reset() {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.opts-div').style.display = 'block';
    document.querySelector('.pic-div').style.display = 'block';
    init();
}