import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('survey', {
      user: params.id,
    });
  },

  actions: {
    createNewSurvey(surveyData) {
      var newSurvey = this.modelFor('santas.edit');

      newSurvey.setProperties(surveyData);

      newSurvey.save().then(() => {
        this.transitionTo('santas.list');
      });
    },
  },
});
