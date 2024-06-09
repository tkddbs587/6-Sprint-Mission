interface User {
  image: string;
  nickname: string;
  id: number;
}

export interface Comment {
  writer: User;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}
