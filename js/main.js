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