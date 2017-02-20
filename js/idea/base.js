function displaySubMenu(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "block";
}

function hideSubMenu(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "none";
}

var sdelay = 0;

function returnTop() {
    window.scrollBy(0, -500);
    if (document.body.scrollTop > 0) {
        sdelay = setTimeout('returnTop()', 50);
    }
}

$('.js-open-nav').on('click', function() {
	if ($('.user-wrap').css('display') == 'block') { 	
        $('.container,footer').toggle();
        $('.user-wrap').css('display', 'none');
    } else {
         $('.container,footer').toggle();
        $('.user-wrap').css('display', 'block');
    }
    $('.navbar-toggle').toggleClass('active');
});
