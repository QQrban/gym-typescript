export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
