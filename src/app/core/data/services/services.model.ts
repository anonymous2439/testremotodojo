
export interface ServiceSectionModel {
  id: number;
  services: ServicesModel[]
}

export interface ServicesModel {
  id: number;
  icon: string;
  name: string;
  image: string;
  description: string;
}