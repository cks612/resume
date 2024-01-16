export interface SkillsDataProps {
  id: number;
  name: string;
  rating: number;
}
export interface Props {
  BackColor: string;
}

export interface ExperienceProps {
  id: number;
  description?: string;
  detail?: DetailDescriptionProps[];
  keywords?: string;
}

export interface DetailDescriptionProps {
  id: number;
  description?: string;
}
