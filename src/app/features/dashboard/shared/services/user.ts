export interface Roles {
  subcriber?: boolean;
  admin?: boolean;
}
export interface User {
  uid: string;
  email: string;
  roles: Roles;
  firstName: string;
  lastName: string;
  nickName: string;
  birthDay: number;
  gender: string;
}
