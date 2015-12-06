import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  submit(ev) {
    ev.preventDefault();

    // Save all of the questions and wait...
    var questions = this.get('survey.questions');

    new Ember.RSVP.all(questions.map((question) => {
      return question.save();
    })).then(() => {
      this.sendAction('onSurveySaved');
    });
  },
});
