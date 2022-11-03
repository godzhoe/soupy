$(document).ready(function () {
  $(".card").addClass("red");
  $(".card").css("animation", "bounce 2s infinite");
  $(".run").addClass("yellow");
});

$(".card").click(function () {
  var $this = $(".card");
  if ($this.hasClass("blue")) {
    if ($(".run").hasClass("green")) {
      $this.css("animation", "none");
      setTimeout(function () {
        $this.css("animation", "bounce 2s infinite");
      }, 1000);
    }

    $this.removeClass("blue");
    $this.addClass("red");
  } else {
    $this.css("animation", "none");

    $this.removeClass("red");
    $this.addClass("blue");
  }
});

$(".run").click(function () {
  var $that = $(".run");
  var $yeah = $(".text");

  if ($that.hasClass("yellow")) {
    $that.animate(
      {
        left: "160px"
      },
      1000
    );
    
    $yeah.animate({ left: "-235px" }, 1000);

    $that.removeClass("yellow");
    $that.addClass("green");
  } else {
    $that.animate({ left: "45px" }, 1000);
    $that.removeClass("green");
    $that.addClass("yellow");
   
    $yeah.animate({ left: "-95px" }, 1000);
   

  }
});