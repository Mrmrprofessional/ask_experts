ocarinaExperts.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ question: factory.question, id: factory.questions.length + 1, answers: [], isAnswered: true });
    factory.question = null;
  };

  return factory;
});
