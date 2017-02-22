$(document).ready(function(){
  
  function rolldie(){  
    
  var rolldice1 = Math.floor(Math.random(1)*6);
  var rolldice2 = Math.floor(Math.random(1)*6);
  
  var roundednumber = Math.floor(rolldice1);
  console.log(roundednumber);
  var url =  "<img src=" + "images/"+ roundednumber +".png" + ">";
  console.log(url);
  $("body").append( url );

    
    
  };

    
    
  $("#roll-dice").click(function(){
    rolldie();
  });
  });

