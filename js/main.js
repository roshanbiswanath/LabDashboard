/*
let open = document.getElementById('open')
let close = document.getElementById('closed')
*/
let labstatus = document.getElementById('LabStatus')

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
    "status": "OPEN",
    "nextEventTime": "June 5, 2022 15:37:25",
    "carouselImages": [
        "./assets/271191258_2057244351099308_9022260579650513705_n.jpg",
        "./assets/DSC_5709.jpg"
    ],
    "carouselVideos": [
        "./assets/lab.mp4"
    ]
}

const imageTemp1 = '<div class="carousel-item"><div class="image"><img src="';
const imageTemp2 = '" alt="..."></div></div>'
const videoTemp1 = '<div class="carousel-item" data-bs-interval="8000"><video class="video" loop><source src="'
const videoTemp2 = '" type="video/mp4"></video></div>'
carousalInner = ""


for (let index = 0; index < data["carouselImages"].length; index++) {
    const element = data["carouselImages"][index];
    carousalInner += imageTemp1 + element + imageTemp2;
}
for (let index = 0; index < data["carouselVideos"].length; index++) {
    const element = data["carouselVideos"][index];
    carousalInner += videoTemp1 + element + videoTemp2;

}
let carousal = document.getElementById('carousal')
let carousalinner = document.getElementsByClassName('carousel-inner')[0];
carousalinner.innerHTML = carousalInner;
document.getElementsByClassName('carousel-item')[0].classList.add('active')
let list = document.getElementsByClassName('image')

let vidList = document.getElementsByClassName('video')
console.log(carousal.clientHeight)
console.log(carousal.clientWidth)
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

var countdown = document.getElementsByClassName('countdown')[0]

var dayEle = document.getElementById("dayEle");
var hourEle = document.getElementById("hourEle");
var minuteEle = document.getElementById("minuteEle");
var secondEle = document.getElementById("secondEle");
// Set the date we're counting down to
var countDownDate = new Date(data["nextEventTime"]).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date();
    /*
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var distance = now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    dayEle.innerHTML = now.prototype.getHours();
    hourEle.innerHTML = minutes;
    minuteEle.innerHTML = seconds;
    secondEle.innerHTML = seconds;
    */
    hour = now.getHours();
    ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    //dayEle.innerHTML = hour;
    //hourEle.innerHTML = minutes;
    //minuteEle.innerHTML = seconds;
    //secondEle.innerHTML = ampm;
    countdown.innerHTML = hour + ":" + minutes + ":" + seconds + " " + ampm;


}, 1000);

