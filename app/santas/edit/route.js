import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('survey');
  },

  actions: {
    createNewSurvey(surveyData) {
      var newSurvey = this.modelFor('santas.edit');

      newSurvey.setProperties(surveyData);

      newSurvey.save().then(() => {
        this.transitionTo('santas.index');
      });
    },
  },
});
