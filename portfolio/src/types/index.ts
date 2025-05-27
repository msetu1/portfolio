export type SkillArea =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Repository'
  | 'Deploy'
  | 'Version Control'
  | 'Design';

export interface ISoftSkill {
  _id:string;
  name: string;
  icon: string;
  category: 'Expertise' | 'Comfortable' | 'Familiar' | 'Tools';
  area: string;
  isAvailable: boolean;
  isDeleted?: boolean;
}


export interface IPProject {
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
export interface IPEducation {
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

export interface IPResume {
  _id:string;
  url: string;
  uploadedAt?: string;
  isDeleted?: boolean;
}
