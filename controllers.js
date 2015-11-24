(function () {


  angular
    .module('places')
    .controller('MainController', function ($scope) {
      $scope.alertMe = function () {
      _.times(1000, function () {
          console.log("hello everyone!");
        })
      };
    })
    .controller('PlacesController', function ($scope, PlacesService) {

      PlacesService.getPlaces().success(function (places) {
        console.log(places);
        $scope.allPlaces = places;
      });



      // $scope.allPlaces = [
      //   {
      //     title: "The Art of War",
      //     cover: "http://www.returnofkings.com/wp-content/uploads/2015/01/sun-tzu.jpg",
      //     description: "strategy stuff"
      //   },
      //   {
      //     title: "ng-Place",
      //     cover: "http://ecx.images-amazon.com/images/I/712vyspLr8L.jpg",
      //     description: "angular Place"
      //   }
      // ];

      $scope.addPlace = function (newPlace) {
        console.log(newPlace);
        PlacesService.createPlace(newPlace);
      };

    });


})();
