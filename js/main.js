$(document).ready(function() {

  console.log("ready document !")

  function headRoom() {
    var header = new Headroom(document.querySelector("#header"), {
      tolerance: {
        up: 8,
        down: 5
      },
      offset: 120,
    });
    header.init();
  }
  // headRoom();

  function sidebarWidthControl() {
    var getWindowWidth = $(window).outerWidth();
    var getAsideWidth = $("aside").outerWidth();
    var getMainWidth = $("main").outerWidth();
    console.log("getWindowWidth:"+getWindowWidth+"getAsideWidth::"+getAsideWidth+"getMainWidth::"+getMainWidth);
  }  
  // sidebarWidthControl();


  // resize
  $(window).resize(function() {
    // sidebarWidthControl();
  });
});
