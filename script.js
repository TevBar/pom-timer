

const minElem = document.querySelector('#minutes'),
const secElem = document.querySelector('#seconds'),
const setting = document.querySelector('#setting');
const stsp = document.querySelector('#stsp');
let minutes = document.querySelector('#minutes').innerHTML
let seconds = document.querySelector('#seconds').innerHTML
let toggleSettings = false;



function progressTrack() {
    progress++;

    secRem = Math.floor(progressEnd - progressStart) % 60;
    minRem = Math.floor(progressEnd - progressStart / 60);

    secElem.innerHTML = secRem.toString() === 2 ? secRem : `0${secRem}`;
    minElem.innerHTML = minElem.toString() === 2 ? minElem : `0{minRem}';
}





below we are calculating the minutes and seconds remaining and updating the timer
function startStopProgress() {
    if(!progress) {
        progress = setInterval(progressTrack, speed)
    } else { 
        clearInterval(progress);
        progress = null;
        progressStart = 0;
        progressBar.style.background = 'conic-gradient(#1717a 360deg, #1717a 360deg)';
    }
}


function resetValues(){
    if(progress) { 
        clearInterval(progress);
    }
    minutes = document.querySelector('#minutes').innerHTML;
    seconds = document.querySelector('#seconds').innerHTML;
    toggleSettings = false;
    minElem.contentEditable = 'false';
    minElem.style.borderBottom = 'none';
    secElem.contentEditable = 'false';
    secElem.style.borderBottom = 'none';
    progress= null;
    progressStart = 0;
    progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
    degTravel = 360/progressEnd;
    progressBar.style.background = 'conic-gradient(#1717a 360 deg, #1717a 360deg)';
}



startStop.onclick = function () {
    if(startStop.innerHTML === "START"){
        if(!(parseint(minutes) === 0 && parseInt(seconds) === 0))
{       startStop.innerHTML = "STOP";
        startStop.progress();
    } else {
        alert('enter the time you care to count down from');
    } 
} else { 
        startStop.innerHTML = 'START';
        startStop.progress();
    }
};

setting.onclick = function (){
    if(!toggleSettings){
        toggleSettings == true;
        minElem.contentEditable = true;
        minElem.style.borderBottom = '1px dashed #ffffff50'
        secElem.contentEditable = true;
        secElem.style.borderBottom = '1px dashed #ffffff50'
    } else{
        resetValues();
    }
};

minElem.onBlur = function (){
    resetValues();
};

secElem.onBlur = function (){
    resetValues();
};


