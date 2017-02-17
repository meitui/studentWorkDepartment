function displaySubMenu(li) {
var subMenu = li.getElementsByTagName("ul")[0];
subMenu.style.display = "block";

}
function hideSubMenu(li) {
var subMenu = li.getElementsByTagName("ul")[0];
subMenu.style.display = "none";
}
var sdelay=0;
function returnTop() {
 window.scrollBy(0,-500);
 if(document.body.scrollTop>0) { 
  sdelay= setTimeout('returnTop()',50);
 }
}

// $('body').on('click', '.js-open-nav', function () {

//     var t = $('nav');
//     t.hide();
//     $('.search-wrap').hide();
//     if ($('.user-wrap').css('display') == 'block') {
//         $('.htmlBox,body').removeAttr('style');
//         t.stop().animate({'opacity': '0'}, 200, function () {
//             t.hide();
//         });
//         $('.user-wrap').hide();
//     } else {
//         $('.htmlBox,body').css({'overflow': 'hidden','height':document.documentElement.clientHeight});
//         t.show().animate({'opacity': '1'}, 300);
//         $('.user-wrap').show()
//     }
//     $('.navbar-toggle').toggleClass('active');
// });