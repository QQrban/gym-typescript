export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Gallery = "gallery",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
