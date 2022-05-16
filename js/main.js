let list = document.getElementsByClassName('image')
/*
let open = document.getElementById('open')
let close = document.getElementById('closed')
*/
let labstatus = document.getElementById('LabStatus')
console.log(list)
let vidList = document.getElementsByClassName('video')
let carousal = document.getElementById('carousal')
console.log(carousal.clientHeight)
console.log(carousal.clientWidth)
/*
function windowWasResized() {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        element.style.height = carousal.clientHeight + 'px'
        element.style.width = carousal.clientWidth + 'px'
    }
}
*/
data = {
    "status": "OPEN"
}
setStatus(data.status)

window.addEventListener('resize', resizeImages)

window.onload = function () {
    resizeImages()
}

setInterval(function () {
    setStatus(data.status)
}, 5000);

function setStatus(status) {
    if (status == "OPEN") {
        labstatus.innerHTML = "OPEN"
        labstatus.style.backgroundColor = "green"
        labstatus.style.fontSize = "6vw"
    }
    else {
        labstatus.innerHTML = "CLOSED"
        labstatus.style.backgroundColor = "red"
        labstatus.style.fontSize = "5.5vw"
    }
}

function resizeImages() {

    for (let index = 0; index < list.length; index++) {
        const element = list[index].getElementsByTagName('img')[0];
        console.log(element.naturalHeight)
        console.log(element.naturalWidth)
        console.log(element.naturalHeight > element.naturalWidth)
        if (element.naturalHeight > element.naturalWidth) {
            x = element.naturalWidth
            element.width = carousal.clientWidth
            console.log("x")
            element.height = carousal.clientWidth * element.naturalHeight / x
        }
        else if (element.naturalHeight < element.naturalWidth) {
            console.log("y")
            y = element.naturalHeight
            element.height = carousal.clientHeight
            element.width = carousal.clientHeight * element.naturalWidth / y
        }

    }
}


var dayEle = document.getElementById("dayEle");
var hourEle = document.getElementById("hourEle");
var minuteEle = document.getElementById("minuteEle");
var secondEle = document.getElementById("secondEle");
// Set the date we're counting down to
var countDownDate = new Date("July 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    dayEle.innerHTML = days;
    hourEle.innerHTML = hours;
    minuteEle.innerHTML = minutes;
    secondEle.innerHTML = seconds;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);