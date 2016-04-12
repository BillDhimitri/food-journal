angular.module('foodJournal')

.controller('EntriesCtrl', [
'$scope',
'entries',
'entry',
function($scope, entries, entry){

$scope.entry = entry;


}]);
