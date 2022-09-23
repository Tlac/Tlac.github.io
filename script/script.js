window.addEventListener("resize", resizeListener);
function fillImage(width, height) {
    var mobile_background = document.getElementById("mobileBackground");
    var desktop_background = document.getElementById("desktopBackground");
    var twitter_logo = document.getElementById("whiteTwitterLogo");
    twitter_logo.style.top = `${0.87*height}px`//"550px"
    twitter_logo.style.bottom = null

    const WIDTH_TO_HEIGHT_RATIO = 1.7712

    currentRatio = width/height
    if (currentRatio > WIDTH_TO_HEIGHT_RATIO) {
        desktop_background.style.width = "100%"
        desktop_background.style.height = null
        
    } else {
        desktop_background.style.width = null
        desktop_background.style.height = "100%"
        twitter_logo.style.top = null
        twitter_logo.style.bottom = "6%"
    }

    if (currentRatio > WIDTH_TO_HEIGHT_RATIO) {
        mobile_background.style.width = "100%"
        mobile_background.style.height = null
    } else {
        mobile_background.style.width = null
        mobile_background.style.height = "100%"
    }
}

function resizeListener() {
    var width = window.innerWidth
    var height = window.innerHeight
    fillImage(width, height)
}

var width = window.innerWidth
var height = window.innerHeight
fillImage(width, height)
