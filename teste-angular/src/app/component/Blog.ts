export interface IBlogs {
  id: string,
  title: string;
  author: string;
  date: string;
  description: {
    html: string
  },
  url: string;
  urlArtigo: string;
  imageAuthor: {
    id: string,
    url: string
  };
  image: {
    id: string,
    url: string
  }
}

export interface IBlogReturn {
  data:{
    blogs: IBlogs[]
  }
}
