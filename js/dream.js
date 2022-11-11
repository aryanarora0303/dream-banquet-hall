// Change Tag line image based on device size
window.onload = changeTagLineImageForMobile();
function changeTagLineImageForMobile() {
    if(window.innerWidth <= 450) {
        let pathname = window.location.pathname;
        
        // Only chage tag line image for the index page
        if (pathname.includes("index.html") || (pathname.includes("/") && pathname.length == 1)){
            document.querySelectorAll('[id^="slider"]').forEach((el, index) => {
                el.style.backgroundImage = "url('./images/tag-line-bg-mobile.jpg')";
            })

            document.querySelectorAll('[id^="slider-party"]').forEach((el, index) => {
                el.style.backgroundImage = "url('./images/tag-line-party-mobile.jpg')";
            })

            document.querySelectorAll('[id^="slider-catering"]').forEach((el, index) => {
                el.style.backgroundImage = "url('./images/tag-line-catering-mobile.jpg')";
            })
        }
    }
}

// Scroll to Reservations
function scrollToID(id) {
    // seamless.elementScrollIntoView(document.getElementById(id), {
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

// Open home page and scroll to id as specified
function scrollToIndexPageID(id) {
    window.open(`/index.html?scrollTo=${id}`,"_self");
}

// Scroll to ID, Coming from another page
$(document).ready(function(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let scrollTo = urlParams.get('scrollTo');

    if(scrollTo){
      setTimeout(function(){
        scrollToID(scrollTo.toString());
      }, 1000);
    }
});