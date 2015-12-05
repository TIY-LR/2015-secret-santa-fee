import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  submit(ev) {
    ev.preventDefault();

    var data = this.getProperties('firstName', 'lastName');

    this.sendAction('onsubmit', data);
  },
});
