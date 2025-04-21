export interface Author {
  name: string;
  avatarUrl: string;
  title: string;
}

export interface PostData {
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  author: Author;
}
