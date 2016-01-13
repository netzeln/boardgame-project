$(document).ready(function() {
  $("form#game-selector").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var players = parseInt($("input#players").val());
    var experience = $("input#check").prop('checked');

    $(".nameInput").text(name);

    if (name) {

      if (age >= 15 && experience === true) {
        var game = "Agricola";
        $(".gameOutput").text(game);

     } else if (age < 15 && players >= 5){
       var game = "The MetaGame";
       $(".gameOutput").text(game);

     } else if (players === 3) {
        var game = "Hive";
        $(".gameOutput").text(game);

      } else {
        var game = "Carcasonne";
        $(".gameOutput").text(game);
      }
   }
    else {
      $(".form-group").attr("class", "has-error");
    }

  $("#output-message").show();
 event.preventDefault();
});



  });
