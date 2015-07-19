Router.route('/t/new', {
  name: 'newTopic',
  template: 'newTopic',
  waitOn: function () {
    return [
      Meteor.subscribe('categories')
    ];
  }
});

Router.route('/t/:_id', {
  name: 'topic',
  template: 'topic',
  data: function () {
    return Topics.findOne(this.params._id);
  },
  waitOn: function () {
    return [
      Meteor.subscribe('topic', this.params._id),
      Meteor.subscribe('posts', this.params._id)
    ];
  }
});
