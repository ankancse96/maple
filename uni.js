$(document).ready(function(){
    $(".down").mouseover(function(){
      $(".up").slideDown("slow");
    });
    $(".down").mouseout(function(){
      $(".up").slideUp("slow");
    });
  });

  $(document).ready(function(){
    $(".s1").mouseover(function(){
      $(".s2").slideDown("slow");
    });
    $(".s1").mouseout(function(){
      $(".s2").slideUp("slow");
    });
  });

  $(document).ready(function(){
    $(".p1").mouseover(function(){
      $(".p2").slideDown("slow");
    });
    $(".p1").mouseout(function(){
      $(".p2").slideUp("slow");
    });
  });

  $(document).ready(function(){
    $(".g1").mouseover(function(){
      $(".g2").slideDown("slow");
    });
    $(".g1").mouseout(function(){
      $(".g2").slideUp("slow");
    });
  });


  $(".button").click(function(){
    $(".search").show(1000);
  });
  
  




  


