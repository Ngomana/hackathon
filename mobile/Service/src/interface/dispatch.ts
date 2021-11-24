export interface DispatchInterface {
  _id: string;
  _postId: string;

  location: {
    latitude: string;
    longitude: string;
  };
  status: string; //e.g partial, complete, note yet started
  _municipalityId: string;
  _partitionKey: string;
}
