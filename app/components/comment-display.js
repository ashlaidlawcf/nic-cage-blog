import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment(post, comment, params) {
      this.sendAction('updateComment', post, comment, params);
    },
    deleteComment(post, comment) {
      this.sendAction('deleteComment',post, comment);
    }
  }
});
