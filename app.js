var ocarinaExperts = angular.module('ocarinaExperts', ['ui.router']);

ocarinaExperts.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: 'partials/home.html'
  });

  $stateProvider.state('questions',  {
    url: "/questions",
    templateUrl: 'partials/questions.html',
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state('questions.answers', {
    url: "/:questionId",
    templateUrl: 'partials/questions.answers.html',
    controller: 'AnswersCtrl'
  });
});
