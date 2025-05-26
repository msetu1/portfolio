export type SkillArea =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Repository'
  | 'Deploy'
  | 'Version Control'
  | 'Design';

export type SkillCategory = 'Expertise' | 'Comfortable' | 'Familiar' | 'Tools';

export interface ISoftSkill {
  name: string;
  category: SkillCategory;
  area: SkillArea;
  icon: string;
  isAvailable: boolean;
  isDeleted?: boolean;
}


export const softSkills: ISoftSkill[] = [
  {
    name: 'React.js',
    category: 'Expertise',
    area: 'Frontend',
    icon: '/icons/communication.png',
    isAvailable: true,
  },
  {
    name: 'Teamwork',
    category: 'Comfortable',
    area: 'Repository',
    icon: '/icons/teamwork.png',
    isAvailable: true,
  },
  {
    name: 'Redux',
    category: 'Expertise',
    area: 'Backend',
    icon: '/icons/problem-solving.png',
    isAvailable: true,
  },
  {
    name: 'Adaptability',
    category: 'Familiar',
    area: 'Database',
    icon: '/icons/adaptability.png',
    isAvailable: true,
  }
];
