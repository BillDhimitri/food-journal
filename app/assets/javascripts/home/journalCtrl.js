angular.module('foodJournal')

.controller('JournalCtrl', [
'$scope',
'entries',
function($scope, entries){

$scope.entries = entries.entries;

$scope.deleteEntry = function(entry){
  entries.destroy(entry.id);
};

}])
