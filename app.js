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
      },
    }
  }); //end $stateProvider 'home'

  $stateProvider.state('login', {
    url: "/login",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/login.html"
      }
    }
  }); //end $stateProvider 'login'

  $stateProvider.state('sign-up', {
    url: "/sign-up",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/sign-up.html"
      }
    }
  }); //end $stateProvider 'sign-up'

  $stateProvider.state('post-a-project', {
    url: "/post-a-project",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/post-a-project.html"
      }
    }
  }); //end $stateProvider 'post-a-project'


}); //end freelancerWebpage.config
