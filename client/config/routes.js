var myApp = angular.module('myApp',['ngRoute','ngMessages'])
myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'partials/dashboard.html'
    })
    .when('/new_appointment',{
      templateUrl:'partials/new_appointment.html'
    })
    .when('/login',{
      templateUrl:'partials/login.html'
    })
    .otherwise({
      redirectTo:'/'
    })
})
