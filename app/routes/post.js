import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      return Ember.RSVP.hash({
        post: this.store.findRecord('post', params.post_id, {include: 'comments'}),
      });
    },
    actions: {
      deletePost(post) {
        post.destroyRecord();
        this.transitionTo("index");
      },
      updatePost(post, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            post.set(key,params[key]);
          }
        });
        post.save();
        this.transitionTo('index');
      },
      addComment(params) {
        var newComment = this.store.createRecord('comment',params);
        var post = params.post;
        post.get("comments").addObject(newComment);
        newComment.save().then(function() {
          return post.save();
        });
        this.transitionTo('post', post);
      }
    }
});
