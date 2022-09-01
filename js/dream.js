window.onload = changeTagLineImageForMobile();

function changeTagLineImageForMobile() {
    if(window.innerWidth <= 450) {
        document.getElementById("home").style.backgroundImage = "url('./images/tag-line-bg-mobile.jpg')";
    }
}

// Scroll to Reservations
function scrollToID(id) {
    event.preventDefault();

    // seamless.elementScrollIntoView(document.getElementById("reservations"), {
    //   behavior: "smooth",
    //   block: "start"
    // });

    var element = document.getElementById(id);
    var headerOffset = 95;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}