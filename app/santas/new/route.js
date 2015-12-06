import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    createNewUser(data) {
      var newUser = this.modelFor('santas.new');

      newUser.setProperties(data);

      newUser.save().then(() => {
        debugger;
        this.transitionTo('santas.edit', newUser.id);
      });
    },
  },
});
