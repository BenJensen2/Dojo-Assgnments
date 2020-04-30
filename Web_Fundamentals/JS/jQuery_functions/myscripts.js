
// Makes sure full html script is loaded before execution
$(document).ready(function(){

  // Click and creates a pop-up alert
  $(".click button").click(function(){
    console.log("Click")
    alert("You are Awesome!");
  });

  $(".hide button").click(function(){
      console.log("Hide")
      $(".hide button").hide();
    });

  $(".show button").click(function(){
      console.log("Show")
      $(".hide button").show();
    });

  $(".toggle button").click(function(){
    console.log("Toggle")
    $(".toggle img").toggle();
  });

  $(".slideDown img").hide(function(){
    $(".slideDown img").hide()
  });

  $(".slideDown button").click(function(){
    console.log("Slide Down")
    $(".slideDown img").slideDown();
  });

  $(".append p").click(function(){
    console.log("Append")
    $(".append p").append("KING!!!");
  });

  $(".html button").click(function(){
    console.log("HTML")
    $(".html p").html("He is Risen!!!");
  });

});



  // Wrap in Document.ready