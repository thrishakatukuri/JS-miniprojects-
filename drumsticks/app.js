//2.DRUMSTICKS:
   var drumContainer = document.getElementById("drum");
   var audioElements = document.querySelectorAll("audio");
   
   drumContainer.addEventListener("mouseup", function(e) {
       var key = e.target.dataset.key; 
       audioElements.forEach((a) =>{ 
           a.pause();
       }); 
       var audio = document.querySelector(`audio[data-key="${key}"]`);
       if (audio) {
           audio.play();
       }
   });
   drumContainer.addEventListener("mouseout", function() {
       audioElements.forEach((a) =>{
            a.pause(); 
           });  
   });
  