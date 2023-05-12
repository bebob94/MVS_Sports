export interface User {
  id: string;
  name: string;
  email: string;
  family_name: string;
  given_name: string;
}
export interface MyState {
  user: Registration;
}
export interface Roles {
  id: Number;
  roleName: String;
}
export interface Registration {
  id: String;
  username: String;
  accessToken: String;
  roles: Roles[];
}
