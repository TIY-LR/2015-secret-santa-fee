import DS from 'ember-data';

export default DS.Model.extend({
  questionOne: DS.attr('string'),
  questionTwo: DS.attr('string'),
  questionThree: DS.attr('string'),
  questionFour: DS.attr('string'),
  questionFive: DS.attr('string'),
  questionSix: DS.attr('string'),
  questionSeven: DS.attr('string'),
  questionEight: DS.attr('string'),
  questionNine: DS.attr('string'),
  questionTen: DS.attr('string'),

  user: DS.belongsTo('user', {async: true}),
});
