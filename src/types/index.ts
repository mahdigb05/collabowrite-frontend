export interface DocumentReference {
  creationDate: string;
  owner: {
    username: string;
    email: string;
  };
  title: string;
  id: string;
}
