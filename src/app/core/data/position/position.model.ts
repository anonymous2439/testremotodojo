export interface PositionModel {
  id: number,
  title: string;
  timeStatus: string;
  locations: string[];
  category: number;
  shift: PositionShift;
  descriptions: PositionDesc;
}

export interface PositionShift {
  in: string;
  out: string;
}

export interface PositionDesc {
  desc: string;
  desc2: string;
  qualifications: string[];
  responsibilities: string[];
}
