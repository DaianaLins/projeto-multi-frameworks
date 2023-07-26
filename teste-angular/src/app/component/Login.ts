export interface IUsuario{
  email: string;
  password: string
}

export interface IBlogs{
  id: string,
  title: string;
  author: string;
  date: string;
  description: string
}
export interface IDesign{
  key: string;
  value: string
}
export interface IHeader{
  show?: boolean
}
