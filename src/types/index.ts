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
  tags?: string[]; // used to filter posts
}

export interface ChatData {
  user: string;
  userClaim: string;
  date: string;
  userAvatar: string;
  preview: string;
  messages: ChatMessagesStream[];
}

export interface ChatMessagesStream {
  text: string;
  time: string;
}
