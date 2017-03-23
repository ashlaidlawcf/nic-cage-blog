import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(post, comment) {
      if(confirm("Are you sure you want to delete this comment?")) {
        this.sendAction("deleteComment",post, comment);
      }
    }
  }
});
