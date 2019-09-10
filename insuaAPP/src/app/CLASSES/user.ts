export class UserDetails {
  _id?: string;
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  type?: string;
  status?: string;
}
class UserToken {
  token: string;
}

export class User {
  user: UserDetails;
  token: UserToken;
}
