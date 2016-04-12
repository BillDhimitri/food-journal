angular.module('foodJournal')

.factory('foods', [
'$http',
function($http){

var o = { foods: [ ] };

o.getAll = function() {
  return $http.get('/foods.json').success(function(data){
    angular.copy(data, o.foods);
  });
};

o.create = function(food) {
  return $http.post('/foods.json', food).success(function(data){
    o.foods.push(data);
  });
};

o.edit = function(id, food) {
  return $http.put('/foods/' + id + '.json', food).then(function(res){
    return res.data;
  });
};

o.get = function(id) {
  return $http.get('/foods/' + id + '.json').then(function(res){
    return res.data;
  });
};

o.destroy = function(id) {
  return $http.delete('/foods/' + id + '.json').success(function(data){
    for(i = o.foods.length - 1; i >= 0; i--) {
       if( o.foods[i].id == id) o.foods.splice(i ,1);
    }
  });
};


  return o;
}])

