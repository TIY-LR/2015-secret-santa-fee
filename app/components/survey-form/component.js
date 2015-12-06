import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  submit(ev) {
    ev.preventDefault();

    // Save all of the questions and wait...

    this.sendAction('onsubmit', surveyData);
    console.log(surveyData);
  },
});
