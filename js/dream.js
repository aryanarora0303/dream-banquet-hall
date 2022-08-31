window.onload = changeTagLineImageForMobile();

function changeTagLineImageForMobile() {
    if(window.innerWidth <= 450) {
        document.getElementById("home").style.backgroundImage = "url('./images/tag-line-bg-mobile.jpg')";
    }
}

