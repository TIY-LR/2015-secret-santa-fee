import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('santas', {path: '/'}, function() {
    this.route('new');
    this.route('edit', {path: '/:user_id/edit'});
    this.route('list');
    this.route('surveys');
  });

  this.route('survey', {path: '/:user_id'});
});

export default Router;
