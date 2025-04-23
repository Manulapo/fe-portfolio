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
  tags?: PostTagsTypes[]; // used to filter posts
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
  isMine?: boolean;
}

export type PostTagsTypes = 'all' | 'experience' | 'projects' | 'skills' | 'certifications';
