
$('#addButton').click(function(){

  // var newLi = $('<li></li>');
    var input = $('#inputField').val();
    if (input == ""){
      return
    }
  $('#inputField').val(" ");
  $('#inputField').focus();
  var xButton = $('<button>').append("X");
  xButton.click(function(){
    $(this).parent().remove();
  });
  var newLi = $('<li>').append(input);
  newLi.append(xButton);
  $('#sortable').append(newLi);
  // $("li").click(function(){
  // //   $(this).remove();
  // });

});
