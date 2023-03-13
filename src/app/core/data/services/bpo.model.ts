export interface BPOServiceSectionModel {
  id: number;
  bposervices: BPOServicesModel[];
}

export interface BPOServicesModel {
  id: number;
  icon: string;
  name: string;
  image: string;
  description: string;
}
