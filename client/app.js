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


  $.ajax({
    type: "GET",
    url: "/cats",
    success: function(cats){
      console.log("something");
      // for (i=0; i<cats.length;i++){
      //   $(".cats").append("<p>"+cats[i].name+"</p>");
      //}
    }
  });
});

function addACat(cat){
  console.log(cat);
  $('.cats').append("<p>"+cat.name+"</p>");
  $.ajax({
    type: "POST",
    url: "/addCat",
    data: cat,
    success: function(newCat){
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

    // success: function(cats){
    //   $.ajax({
    //     type: "GET",
    //     url: "/cats",
    //     success: function(cats){
    //       for (i=0; i<cats.length;i++){
    //         $(".cats").append("<p>"+cats[i].name+"</p>");
    //       }
    //     }





        // var app = angular.module('app', []);
        //
        // app.controller("IndexController", ['$scope', '$http', function($scope, $http){
        //   $scope.cat = {};
        //   $scope.cats = [];
        //
        //   console.log("scope.cat=", $scope.cat);
        //   var fetchCats = function() {
        //     return $http.get('/cats').then(function(response){
        //       if(response.status !== 200){
        // //
        // //       }
        //
        //
        //       $scope.cat = {};
        //       $scope.cats = response.data;
        //       return response.data;
        //     });
        //   };
        //
        //   $scope.add = function(cat){
        //     return $http.post('/add', cat).then(fetchCats);
        //   };
        //
        //   fetchCats();
        //
        // }]);
