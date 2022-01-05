$(document).ready(function () {
    $(".card").addClass("blue");
  });
  
  $(".card").click(function () {
    var $this = $(".card");
  
    if ($this.hasClass("blue")) {
      $this.css("transform", "rotateY(180deg)");
      $this.css("transition", "1s")
      $this.removeClass("blue");
      $this.addClass("red");
    } else {
      $this.css("transform", "rotateY(360deg)");
      $this.css("transition", "1s")
      
      $this.removeClass("red");
      $this.addClass("blue");
    }
  });
  
  const transition =  document.querySelector(".card");
      transition.ontransitionend = () => {
        if ($('.card').hasClass("blue")) {
        $('.card').css("transform", "rotateY(0deg)");
        $('.card').css("transition", "none");
        } 
      };