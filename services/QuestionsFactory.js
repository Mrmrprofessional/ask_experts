ocarinaExperts.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ text: factory.question, id: factory.questions.length + 1, answers: [], isAnswered: false });
    factory.question = null;
  };

  return factory;
});
