export interface BlogPost {
  id: number;
  title: string;
  body: string;
  image: string;
  date: string;
}
export interface Post {
  id: number;
  title: string;
  body: string;
  date: string;
  userId: number;
  image?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
