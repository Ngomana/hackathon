interface IComments {
  _id: string;
  message: string;
  createdAt: string;
  updateAt: string;
}

interface IVotes {
  upVote: [
    {
      _id: string;
      count: number;
    },
  ];
  downVote: [
    {
      _id: string;
      count: number;
    },
  ];
}

export interface IssueInterface {
  _id: string;
  image: string;
  location: {
    latitude: string;
    longitude: string;
  };
  comments?: IComments[];

  votes?: IVotes;
}
