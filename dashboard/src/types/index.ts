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
export interface IEducation {
   _id:string;
  institute: string;
  degree: string;
  status: 'Running' | 'Completed';
  category: 'Diploma' | 'SSC' | 'Courses';
  duration: string;
  location?: string;
  description?: string;
  isDeleted?: boolean;
}

export interface IResume {
  _id:string;
  url: string;
  uploadedAt?: string;
  isDeleted?: boolean;
}
