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


// Menu Package Selector Checkbox Limit
var package = {
    veg_appetizer_limit: 0,
    non_veg_appetizer_limit: 0,
    live_counter_limit: 0,
    veg_dinner_limit: 0,
    non_veg_dinner_limit: 0,
    sea_food_limit: 0,
    salads_limit: 0,
    raita_limit: 0,
    dessert_limit: 0,
    add_on_limit: 0
}

function updateModalLabels(package_type){
    document.getElementById("package-modal-label").innerText = `Package ${package_type}`;

    document.getElementById("veg-appetizer-checkbox-label").innerText = `Choose any ${package.veg_appetizer_limit}`;
    document.getElementById("non-veg-appetizer-checkbox-label").innerText = `Choose any ${package.non_veg_appetizer_limit}`;
    document.getElementById("live-counter-checkbox-label").innerText = `Extra Charges Applicable`;
    document.getElementById("veg-dinner-checkbox-label").innerText = `Choose any ${package.veg_dinner_limit}`;
    document.getElementById("non-veg-dinner-checkbox-label").innerText = `Choose any ${package.non_veg_dinner_limit}`;
    document.getElementById("sea-food-checkbox-label").innerText = `Extra Charges Applicable`;
    document.getElementById("salad-checkbox-label").innerText = `Choose any ${package.salads_limit}`;
    document.getElementById("raita-checkbox-label").innerText = `Choose any ${package.raita_limit}`;
    document.getElementById("dessert-checkbox-label").innerText = `Choose any ${package.dessert_limit}`;
    document.getElementById("add-on-checkbox-label").innerText = `Extra Charges Applicable`;
}

document.getElementById("package-a-modal-controller").addEventListener("click", function() {
    package.veg_appetizer_limit = 3;
    package.non_veg_appetizer_limit = 3;
    
    package.live_counter_limit = 100; // there's no limit on this item

    package.veg_dinner_limit = 3;
    package.non_veg_dinner_limit = 3;

    package.sea_food_limit = 100; // there's no limit on this item

    package.salads_limit = 3;
    package.raita_limit = 1;

    package.dessert_limit = 3;

    package.add_on_limit = 100; // there's no limit on this item

    updateModalLabels('A');
});

document.getElementById("package-b-modal-controller").addEventListener("click", function() {
    package.veg_appetizer_limit = 3;
    package.non_veg_appetizer_limit = 2;

    package.live_counter_limit = 100; // there's no limit on this item

    package.veg_dinner_limit = 3;
    package.non_veg_dinner_limit = 2;

    package.sea_food_limit = 100; // there's no limit on this item

    package.salads_limit = 2;
    package.raita_limit = 1;

    package.dessert_limit = 2;

    package.add_on_limit = 100; // there's no limit on this item

    updateModalLabels('B');
});

document.getElementById("package-c-modal-controller").addEventListener("click", function() {
    package.veg_appetizer_limit = 2;
    package.non_veg_appetizer_limit = 2;

    package.live_counter_limit = 100; // there's no limit on this item

    package.veg_dinner_limit = 2;
    package.non_veg_dinner_limit = 2;

    package.sea_food_limit = 100; // there's no limit on this item

    package.salads_limit = 1;
    package.raita_limit = 1;

    package.dessert_limit = 1;

    package.add_on_limit = 100; // there's no limit on this item

    updateModalLabels('C');
});

document.getElementById("package-d-modal-controller").addEventListener("click", function() {
    package.veg_appetizer_limit = 2;
    package.non_veg_appetizer_limit = 1;

    package.live_counter_limit = 100; // there's no limit on this item

    package.veg_dinner_limit = 2;
    package.non_veg_dinner_limit = 1;

    package.sea_food_limit = 100; // there's no limit on this item

    package.salads_limit = 1;
    package.raita_limit = 1;

    package.dessert_limit = 1;

    package.add_on_limit = 100; // there's no limit on this item

    updateModalLabels('D');
});

$('input.veg-appetizer-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.veg-appetizer-checkbox:checked").length;
    if(checked_length > package.veg_appetizer_limit) {
        this.checked = false;
    }
});

$('input.non-veg-appetizer-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.non-veg-appetizer-checkbox:checked").length;
    if(checked_length > package.non_veg_appetizer_limit) {
        this.checked = false;
    }
 });

 $('input.live-counter-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.live-counter-checkbox:checked").length;
    if(checked_length > package.live_counter_limit) {
        this.checked = false; // this item has no limit
    }
 });

 $('input.veg-dinner-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.veg-dinner-checkbox:checked").length;
    if(checked_length > package.veg_dinner_limit) {
        this.checked = false;
    }
 });

 $('input.non-veg-dinner-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.non-veg-dinner-checkbox:checked").length;
    if(checked_length > package.non_veg_dinner_limit) {
        this.checked = false;
    }
 });

 $('input.sea-food-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.sea-food-checkbox:checked").length;
    if(checked_length > package.sea_food_limit) { 
        this.checked = false; // this item has no limit
    }
 });

 $('input.salad-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.salad-checkbox:checked").length;
    if(checked_length > package.salads_limit) {
        this.checked = false;
    }
 });

 $('input.raita-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.raita-checkbox:checked").length;
    if(checked_length > package.raita_limit) {
        this.checked = false;
    }
 });

 $('input.dessert-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.dessert-checkbox:checked").length;
    if(checked_length > package.dessert_limit) {
        this.checked = false;
    }
 });

 $('input.add-on-checkbox').on('change', function(evt) {
    var checked_length = document.querySelectorAll("input.add-on-checkbox:checked").length;
    if(checked_length > package.add_on_limit) {
        this.checked = false; // this item has no limit
    }
 });

 function hide_modal_to_print(){
    document.getElementById("modal_to_print").innerHTML = "";
    document.getElementById("modal_to_print").style.display = "none";
 }

 // Uncheck all Checkboxes when Modal Closing
 $('#package-modal').on('hide.bs.modal', function (e) {
    document.querySelectorAll("input:checked").forEach((el) => {
        el.checked = false;
    });
    hide_modal_to_print();
 })

 function print_menu(){
    document.getElementById("modal_to_print").innerHTML = "";
    document.getElementById("modal_to_print").innerHTML += `<h1>Dream Banquet Hall</h1>`;
    document.getElementById("modal_to_print").innerHTML += `<h2>Menu</h2>`;
    document.getElementById("modal_to_print").innerHTML += `<hr/>`;

    var prev_menu_item_name = "";
    document.querySelectorAll("input:checked").forEach((el) => {
        if(prev_menu_item_name != el.name){
            prev_menu_item_name = el.name;
            document.getElementById("modal_to_print").innerHTML += `<h3>${el.name}</h3>`;
            document.getElementById("modal_to_print").innerHTML += `<p>${el.value}</p>`;
        }
        else {
            document.getElementById("modal_to_print").innerHTML += `<p>${el.value}</p>`;
        }

    })
    document.getElementById("modal_to_print").style.display = "block";

    $("#modal_to_print").printThis({ 
        debug: false,              
        importCSS: true,             
        importStyle: true,         
        printContainer: true,       
        loadCSS: ["./css/bootstrap.min.css", "./css/style.css", "./css/dream.css"], 
        pageTitle: "Dream Banquet Hall Menu",             
        removeInline: false,        
        printDelay: 30,            
        header: null,             
        formValues: true
    });
 }