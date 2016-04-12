angular.module('foodJournal')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('library');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('library');
    });
  };

}]);
