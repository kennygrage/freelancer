var freelancerWebpage = angular.module('freelancerWebpage', ['ui.router']);

freelancerWebpage.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/home.html"
      }
    }
  }); //end $stateProvider 'home'

  // $stateProvider.state('login', {
  //   url: "",
  //   views: {
  //     'header': {
  //       templateUrl: "partials/header.html",
  //       controller: 'HeadersCtrl'
  //     }
  //     'body': {
  //       templateUrl: "partials/login.html"
  //     }
  //   }
  // }); //end $stateProvider 'home'


}); //end freelancerWebpage.config
