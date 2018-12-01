
var counter = 60;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
      	$('#timer').html("<h3>Time's Up!</h3>");  
        return;
    }else{
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);


// $(document).ready(function(){
//     $(".submit").click(function(){
//         $(".answers").hide(1000);
//     });
// });



$(document).ready(function(){

    //if you wish to keep both the divs hidden by default then dont forget to hide //them           
    $(".answers").hide();

   $(".submit").click(function(){
         $(".answers").hide();
         $(".answers").show();
   }
)});