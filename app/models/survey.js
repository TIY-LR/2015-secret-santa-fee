import DS from 'ember-data';

export default DS.Model.extend({
  questions: DS.belongsTo('question'),
  user: DS.belongsTo('user'),
});
