export interface BlogPost {
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