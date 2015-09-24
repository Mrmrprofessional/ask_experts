ocarinaExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    $scope.question.answers.push({ text: $scope.answer, votes: 0, comments: [] });
    $scope.question.isAnswered = true;
    $scope.answer = null;
  }

  $scope.upVote = function(answer) {
    var index = $scope.question.answers.indexOf(answer);
    $scope.question.answers[index].votes += 1;
  };

  $scope.downVote = function(answer) {
    var index = $scope.question.answers.indexOf(answer);
    $scope.question.answers[index].votes -= 1;
  }

  $scope.addComment = function(answer, comment) {
    var index = $scope.question.answers.indexOf(answer);
    $scope.question.answers[index].comments.push(comment);
  }
});
