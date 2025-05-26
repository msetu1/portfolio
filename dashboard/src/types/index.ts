export interface IUser {
  name: string;
  email: string;
  exp: number;
  iat: number;
}

export interface ISkill {
  _id:string;
  name: string;
  icon: string;
  category: 'Expertise' | 'Comfortable' | 'Familiar' | 'Tools';
  area: string;
  isAvailable: boolean;
  isDeleted?: boolean;
}
export interface IProject {
   _id:string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string; 
  clientLink?: string; 
  serverLink?: string;
  thumbnail?: string; 
  isFeatured?: boolean; 
  isAvailable: boolean;
  isDeleted?: boolean;
}