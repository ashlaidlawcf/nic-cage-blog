import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  img_link: DS.attr(),
  date: DS.attr(),
  comments: DS.hasMany('comment', {async: true })
});
