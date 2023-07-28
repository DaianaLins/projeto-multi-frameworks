export interface IUsuario {
  email: string;
  password: string
}

export interface IUserReturn {
  msg: string;
  status: boolean;
  user: {
    username: string;
    email: string;
    password: string;
    isAvatarImageSet: boolean;
    avatarImage: string;
  }
}


export interface IDesign {
  key: string;
  value: string
}
export interface IHeader {
  show?: boolean
}
