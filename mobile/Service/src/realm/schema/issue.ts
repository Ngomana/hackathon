type Post = {};

const PostSchema = {
  name: 'Post',
  properties: {
    _id: 'objectId',
    userId: 'string',
    image: 'string',
    caption: 'string',
    location: {
      longitude: 'string',
      latitude: 'string',
    },
    votes: {
      upVote: [
        {
          _id: 'string',
          userId: 'string',
          count: 'int',
        },
      ],
      downVote: [
        {
          _id: 'string',
          userId: 'string',
          count: 'string',
        },
      ],
      comments: [
        {
          _id: 'string',
          userId: 'string',
          createdAt: 'string',
          updatedAt: 'string',
        },
      ],
      date: 'string',
      dispatched: 'boolean',
      status: 'string',
      _municipalityId: 'string',
      _partitionKey: 'string',
    },
  },
};
