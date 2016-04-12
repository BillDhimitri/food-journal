angular.module('foodJournal', ['ui.router', 'templates', 'Devise'])

.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
    })

    .state('journal', {
      url: '/journal',
      templateUrl: 'home/_journal.html',
      controller: 'JournalCtrl',
      resolve: {
        entryPromise: ['entries', function(entries){
        return entries.getAll();
        }]
      }
    })

    .state('library', {
      url: '/library',
      templateUrl: 'home/_library.html',
      controller: 'LibraryCtrl',
      resolve: {
        entryPromise: ['entries', function(entries){
        return entries.getAll();
        }],
        foodPromise: ['foods', function(foods){
           return foods.getAll();
        }]
      }
    })

   .state('entries', {
      url: '/entries/{id}',
      templateUrl: 'entries/_entries.html',
      controller: 'EntriesCtrl',
      resolve: {
         entry: ['$stateParams', 'entries', function($stateParams, entries) {
            return entries.get($stateParams.id);
         }]
      }
    })

   .state('foods', {
      url: '/foods/{id}',
      templateUrl: 'foods/_foods.html',
      controller: 'FoodsCtrl',
      resolve: {
         food: ['$stateParams', 'foods', function($stateParams, foods) {
            return foods.get($stateParams.id);
         }],

        foodPromise: ['foods', function(foods){
            return foods.getAll();
        }]
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('library');
        })
      }]
    })

    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('library');
        })
      }]
    })

   $urlRouterProvider.otherwise('home');

}])

