(function($){
  $(document).ready(function(){
    var exitDateField = $('.psDateWidget').eq(1);
    if(!exitDateField.val()){
      exitDateField.val(psData.exitDate);
    }
  })
})($j);
