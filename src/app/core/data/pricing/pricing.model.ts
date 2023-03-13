export interface PricingModel {
  id: number;
  icon: string;
  title: string;
  subTitle: string;
  widget: string;
  platform: string;
  description: string;

  othersCost: CostingModel[];
  remotodojoCost: CostingModel[];
}

export interface CostingModel {
  title: string;
  costRange: string;
  description2: string;
}
