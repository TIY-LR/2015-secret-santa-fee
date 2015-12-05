import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  submit(ev) {
    debugger;
    ev.preventDefault();

    var surveyData = this.getProperties(
      'questionOne',
      'questionTwo',
      'questionThree',
      'questionFour',
      'questionFive',
      'questionSix',
      'questionSeven',
      'questionEight',
      'questionNine',
      'questionTen'
    );

    this.sendAction('onsubmit', surveyData);
  },
});
