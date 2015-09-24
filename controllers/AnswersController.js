ocarinaExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    $scope.question.answers.push({ answer: $scope.answer });
    $scope.question.isAnswered = false;
    $scope.answer = null;
  }
});
