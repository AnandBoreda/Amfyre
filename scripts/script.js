var frame_left = document.getElementById('phone');
var frame_right = document.getElementById("phone-rt");
var vid_left = document.getElementById("vid");
var vid_right = document.getElementById("vid-rt");
var glad = document.getElementById("gladmade");
var left_background = document.getElementById('backg');
var right_background = document.getElementById('backg-right');
var come_right = document.getElementById('title');
var logo = document.getElementById("logo");
var cracks = document.getElementById('pyro');
var logoimg = document.getElementById("logo-img");


function loading(){
  console.log($(window).width())
    if ($(window).width() > 550 && $(window).width() < 900 ) {
        
    frame_right.style.display = "none";
    glad.style.display = "none";
    }
    if ($(window).width() > 300 && $(window).width() < 430 ) {
    frame_right.style.display = "block";
    glad.style.display = "none";
    }
    if ($(window).width() > 1300 ){
      frame_right.style.display = "none";
      document.getElementById('playstore').removeAttribute("href");
      document.getElementById('appstore').removeAttribute("href");
    }
    
}
loading();

function rhover(){
    if ($(window).width() > 550 && $(window).width() < 900 ) {
        //  frame_left.style.display = "none";
    // frame_right.style.display = "block";
    glad.style.display = "block";
    come_right.style.visibility = "hidden";
    // document.getElementsByClassName('pyro').style.display = "block";
    // left_background.style.zIndex = "-100";
    left_background.style.display = "none";
    // right_background.style.zIndex = "-100";
    right_background.style.display = "none";
    frame_left.style.display = "none";
    frame_right.style.display = "block";
    glad.style.margin = "-565px 0px 0px -450px";
    glad.style.animation = "glad 1s ease 0s forwards";
    // logo.style.animation ="animlogo .5s ease-in 0s forwards";
    // document.getElementById('iphone-frame-left').style.animation = "mock 3s ease 0s 1 forwards;";
    }

    if ($(window).width() > 1300 ){
      left_background.style.display = "none";
      right_background.style.display = "none";
      come_right.style.visibility = "hidden";
      glad.style.display = "block";
      glad.style.animation = "dglad 1s ease 0s forwards";
      frame_left.style.display = "none";
      frame_right.style.display = "block";
      cracks.style.display = "block";
      document.getElementById('dwnrow').removeAttribute("href");
      }
}

function lhover(){
    if ($(window).width() > 550 && $(window).width() < 900 ) {
    come_right.style.visibility = "visible";
    // left_background.style.zIndex = "-8";
    left_background.style.display = "block";
    // right_background.style.zIndex = "-8";
    right_background.style.display = "block";
    glad.style.display = "none";
    // glad.style.margin = "-565px 0px 0px -450px";
    frame_left.style.display = "block";
    frame_right.style.display = "none";
    }

    if ($(window).width() > 1300 ){
      left_background.style.display = "block";
      right_background.style.display = "block";
      come_right.style.visibility = "visible";
      glad.style.display = "none";
      frame_left.style.display = "block";
      frame_right.style.display = "none";
      cracks.style.display = "none";

      }
}



// var elem = document.querySelector('.main'), 
// div = document.querySelector('.phone'), 
// x = 0, 
// y = 0, 
// mousedown = false; 

// // div event mousedown 
// div.addEventListener('mousedown', function (e) { 
// // mouse state set to true 
// mousedown = true; 
// // subtract offset 
// x = div.offsetLeft - e.clientX; 
// y = div.offsetTop - e.clientY; 
// }, true); 

// // div event mouseup 
// div.addEventListener('mouseup', function (e) { 
// // mouse state set to false 
// mousedown = false; 
// }, true); 

// // element mousemove to stop 
// elem.addEventListener('mousemove', function (e) { 
// // Is mouse pressed 
// if (mousedown) { 
// // Now we calculate the difference upwards 
// div.style.left = e.clientX + x + 'px'; 
// div.style.top = e.clientY + y + 'px'; 
// } 
// }, true); 

if ($(window).width() < 450 ) {

window.onscroll = function (e) {
    var vertical_position = 0;
    if (pageYOffset)
      vertical_position = window.pageYOffset;
    else if (document.documentElement.clientHeight)
      vertical_position = document.documentElement.scrollTop;
    else if (document.body) 
      vertical_position = document.body.scrollTop;
  
    var mframe = document.getElementById('iphone-frame-left');
    var mvid = document.getElementById('vid');
    var cracks = document.getElementById('pyro');
    

    if(vertical_position < 1){
        mframe.style.top = "100px";
        mvid.style.top = "108px";
        cracks.style.display = "none";
    } 
    if(vertical_position > 1){
    mframe.style.top = (vertical_position + 200) + 'px';
    mvid.style.top = (vertical_position + 208) + 'px';
    }   
    if(vertical_position > 470){
        
        mframe.style.top = "650px";
        mvid.style.top = "658px";
        cracks.style.display = "block";
    }     
  }
}

// ipad

if ($(window).width() > 700 && $(window).height() == 1024 ) {
    var main = document.getElementById('1024main');
    var footer = document.getElementById('1024footer');
    var right = document.getElementById('1024right');
    var ltframe = document.getElementById("iphone-frame-left");
    var rtframe = document.getElementById("iphone-frame");
    var rtvid = document.getElementById("vid-rt");
    ltvid = document.getElementById("vid");

    main.style.height = "1024px";
    footer.style.margin = "924px -15px 0px -15px";
    right.style.margin = "0";
    come_right.style.margin = "800px 0px 0px 0px";
    ltframe.style.margin = "230px 0px 0px 0px";
    ltvid.style.margin = "230px 0px 0px 0px";
    rtframe.style.margin = "230px 0px 0px 45px";
    rtvid.style.margin = "230px 0px 0px 0px";
}

// ipad pro

// if ($(window).width() > 1000 && $(window).height() == 1366 ) {

//     var main = document.getElementById('1024main');
//     var footer = document.getElementById('1024footer');
//     var right = document.getElementById('1024right');
//     var ltframe = document.getElementById("iphone-frame-left");
//     var rtframe = document.getElementById("iphone-frame");
//     var rtvid = document.getElementById("vid-rt");
//     ltvid = document.getElementById("vid");

//     main.style.height = "1024px";
//     footer.style.margin = "1240px -15px 0px -15px";
//     right.style.margin = "0";
//     come_right.style.margin = "1000px 0px 0px 0px";
//     ltframe.style.margin = "230px 0px 0px 0px";
//     ltvid.style.margin = "230px 0px 0px 0px";
//     rtframe.style.margin = "230px 0px 0px 45px";
//     rtvid.style.margin = "230px 0px 0px 0px";
//     logoimg.style.width = "200px";
//     logoimg.style.height = "200px";

// }

  

