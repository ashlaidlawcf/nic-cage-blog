import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(params) {
      this.transitionTo('search', params);
    }
  }
});
