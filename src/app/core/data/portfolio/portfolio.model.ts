export interface PortfolioModel {
  id: number;
  icon: string;
  title: string;
  description: string;
  works: WorksModel[];
}

export interface WorksModel {
  id: number;
  title: string;
  image: string;
}
