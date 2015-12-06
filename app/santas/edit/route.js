import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    surveyHasSaved() {
      this.transitionTo('santas.list');
    },
  },
});
