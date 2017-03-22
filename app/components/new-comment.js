import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  actions: {
    addComment() {
      var params = {
        title: this.get("title"),
        name: this.get("name"),
        comment: this.get("comment"),
        post: this.get('post')
      };
      this.set('isShowing', false);
      this.sendAction("addComment", params);
    },
    showForm() {
      this.set('isShowing', true);
    },
    hideForm() {
      this.set('isShowing', false);
    }
  }
});
