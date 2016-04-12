angular.module('foodJournal')

.controller('LibraryCtrl', [
'$scope',
'foods',
'entries',
function($scope, foods, entries){

$scope.foods = foods.foods;
$scope.entries = entries.entries;

$scope.addEntry = function(food){

  entries.create({
    food_id: food.id, 
    food_name: food.name,
    food_description: food.description,
    eaten_at: new Date()
  });
};

$scope.addFood = function(){
  if(!$scope.name) { return; }
  foods.create({
    name: $scope.name,
    description: $scope.description,
    rating: $scope.rating
  });
  $scope.name = "";
  $scope.description = "";
  $scope.rating = 0;
};

$scope.deleteFood = function(food){
  foods.destroy(food.id);
};

}])
