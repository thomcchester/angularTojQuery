$(document).ready(function(){
  $(".sandwich").keyup(function(){
    $(".eatingSandwich").html($(this).val());
  });

  $(".formCat").on("submit",function(event){
    event.preventDefault();
    var val={};
    $.each($(".formCat").serializeArray(), function(i, field){
      val[field.name] = field.value;
    });
    $(".cats").empty();
    addACat(val);
  });

});

function addACat(cat){
  $.ajax({
    type: "POST",
    url: "/addCat",
    data: cat,
    success: function(cat){
      $.ajax({
        type:"GET",
        url:"/cats",
        success:function(cats){
          for(i=0; i<cats.length;i++){
            $(".cats").append("<p>"+cats[i].name+"</p>");
          }
        }
      });
    }

  });
}
