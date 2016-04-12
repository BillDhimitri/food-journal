angular.module('foodJournal')

.controller('FoodsCtrl', [
'$scope',
'$state',
'foods',
'food',
function($scope, $state, foods, food){

$scope.food = food;
$scope.name = food.name;
$scope.description = food.description;
$scope.rating = food.rating;
if (!(0 < $scope.rating && $scope.rating < 4)) {
    $scope.rating = 0;
}

$scope.editFood = function(){
  if(!$scope.name) { return; }

  food.name = $scope.name;
  food.description = $scope.description;
  food.rating = $scope.rating;

  foods.edit(food.id, food);

  $state.go('library');
};



}]);
