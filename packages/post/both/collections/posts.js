Posts = new Mongo.Collection('posts');

Schema.posts = new SimpleSchema({
  body: {
    type: String
  },
  topicId: {
    type: String
  },
  author: {
    type: String
  },
  authorId: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Posts.attachSchema(Schema.posts);

Meteor.methods({
  submitPost: function (post) {
    if (! Meteor.user()) return;

    check(post, {
      body: String,
      topicId: String
    });

    _.extend(post, {
      author: Meteor.user().username,
      authorId: Meteor.userId()
    });

    var postId = Posts.insert(post);

    // increment the postCount only on the server side
    // don't update in a stub method because allowing update is a security hole
    if (! this.isSimluation) {
      Topics.update(post.topicId, {$inc: {postCount: 1}});
      Topics.update(post.topicId, {$set: {lastActivity: new Date()}});
    }

    return postId;
  }
});
