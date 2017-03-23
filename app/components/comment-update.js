import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  actions: {
    updateComment(post, comment) {
      var params = {
        title: this.get("title"),
        name: this.get("name"),
        commentText: this.get("commentText"),
        post: this.get('post')
      };
      this.set('isShowing', false);
      this.sendAction("updateComment",post, comment, params);
    },
    showForm() {
      this.set('isShowing', true);
    },
    hideForm() {
      this.set('isShowing', false);
    }
  }
});
