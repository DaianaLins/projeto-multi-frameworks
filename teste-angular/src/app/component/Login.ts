export interface IUsuario{
  email: string;
  password: string
}

export interface IBlogs{
  id: string,
  title: string;
  author: string;
  date: string;
  description: string;
  imageAuthor : {
    id: string,
    url: string
  };
  image : {
    id: string,
    url: string
  }
}
export interface IDesign{
  key: string;
  value: string
}
export interface IHeader{
  show?: boolean
}
