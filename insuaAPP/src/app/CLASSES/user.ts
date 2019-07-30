export class UserDetails {
  _id?: string;
  name?: string;
  email?: string;
  type?: string;
  status?: string;
  permissions?: {
    houses: {
      read: boolean;
      update: boolean;
      delete: boolean;
    };
    employees: {
      create: boolean;
      read: boolean;
      update: boolean;
      delete: boolean;
    };
    tasks: {
      create: boolean;
      read: boolean;
      update: boolean;
      delete: boolean;
    };
    sales: {
      create: boolean;
      read: boolean;
      update: boolean;
      delete: boolean;
    };
  };
}
class UserToken {
  token: string;
}

export class User {
  user: UserDetails;
  token: UserToken;
}
