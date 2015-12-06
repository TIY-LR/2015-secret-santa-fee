import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  survey: DS.hasMany('survey'),

  firstSurvey: Ember.computed.alias('survey.firstObject'),
});
