export interface PostInterface {
  _id: string;
  userId: string;
  image: string;
  caption: string;
  location: {
    longitude: string;
    latitude: string;
  };
  votes: {
    upVote: [
      {
        _id: string;
        userId: string;
        count: number;
      },
    ];
    downVote: [
      {
        _id: string;
        userId: string;
        count: number;
      },
    ];
  };
  comments: [
    {
      _id: string;
      userId: string;
      createdAt: string;
      updatedAt: string;
    },
  ];
  date: string;
  dispatched: boolean;
  status: string;
  _municipalityId: string;
  _partitionKey: string;
}
