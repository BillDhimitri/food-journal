angular.module('foodJournal')

.factory('entries', [
'$http',
function($http){

var o = { entries: [ ] };

o.getAll = function() {
  return $http.get('/entries.json').success(function(data){
    angular.copy(data, o.entries);
  });
};

o.create = function(entry) {
  return $http.post('/entries.json', entry).success(function(data){
    o.entries.push(data);
  });
};

o.get = function(id) {
  return $http.get('/entries/' + id + '.json').then(function(res){
    return res.data;
  });
};

o.destroy = function(id) {
  return $http.delete('/entries/' + id + '.json').success(function(data){
    for(i = o.entries.length - 1; i >= 0; i--) {
       if( o.entries[i].id == id) o.entries.splice(i ,1);
    }
  });
};



  return o;
}])

