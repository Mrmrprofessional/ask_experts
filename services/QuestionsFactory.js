ocarinaExperts.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [{text: "Why do birds suddenly appear whenever you are near?", id: 1, answers: [{text: "Just like me, they long to be close to you.", votes: 1000, comments: ["Nice Carpenters reference, dude", "Love that song!", "The who?"]}], isAnswered: true }, {text: "What happens when an unstoppable force meets and immovable object?", id: 2, answers: [], isAnswered: false }];
  factory.addQuestion = function() {
    factory.questions.push({ text: factory.question, id: factory.questions.length + 1, answers: [], isAnswered: false });
    factory.question = null;
  };

  return factory;
});
