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
  hasCta?: boolean; // used to show CTA button
  hasPdf?: boolean; // used to show CTA button
  ctaUrl?: string; // used to redirect to another page
  downloadUrl?: string; // used to download the file
  type?: PostTagsTypes[]; // used to filter posts
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
  isMine?: boolean;
}

export type PostTagsTypes =
  | 'all'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'certifications';

export interface NotificationData {
  title: string;
  icon: string; // can be emoji or icon name
  description: string;
  date: string;
  hasCTA: boolean;
  cta: string;
  toRead: boolean;
  type: 'job' | 'myPost' | 'mention' 
}


export type skillsType = 'frameworks' | 'language' | 'design' | 'database';

export type CertificationData = {
  title: string;
  organization: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  skills?: string[];
  description?: string;
  logoUrl?: string;
};

export type TestimonialData = {
  name: string;
  role: string;
  company?: string;
  date: string;
  text: string;
  avatarUrl?: string;
  companyLogo?: string; 
}


export type InspirationsData = {
  name: string;
  text: string;
  avatarUrl?: string;
  company?: string;
}
