
window.onload = function() {
    var greetingTxt = document.getElementsByClassName('greetings')[0];
    var audio = document.getElementById('audio');
    var audio2 = document.getElementById('audio2');
    var wrapper = document.getElementById('wrapper');
    var leftEye = document.getElementsByClassName('left-eye')[0];
    var rightEye = document.getElementsByClassName('right-eye')[0];
    var mouth = document.getElementsByClassName('mouth')[0];
    var instruction = document.getElementsByClassName('instruction')[0];
    var image = document.getElementsByClassName('image')[0];
    setTimeout(function() {
        greetingTxt.style.opacity = '1';
    }, 6000);
    
    document.body.onclick = function() {
        instruction.style.display = "none";
        audio.play();
        audio2.play();
        // Credits to krOw
        wrapper.classList.add('play-animation');
        leftEye.classList.add('play-animation');
        rightEye.classList.add('play-animation');
        mouth.classList.add('play-animation');
        
        setTimeout(function() {
            image.style.opacity = "1";
        }, 10000);
        setTimeout(function() {
            image.style.transition = "all 500ms linear";
            image.style.opacity = "0";
        }, 15000);
        
        setTimeout(function() {
            image.style.transition = "";
        }, 19000);
        
        setTimeout(function() {
            image.style.transition = "all 0 linear";
            image.style.opacity = "1";
        }, 30000);
        setTimeout(function() {
            image.style.transition = "all 500ms linear";
            image.style.opacity = "0";
        }, 35000);
    };
};