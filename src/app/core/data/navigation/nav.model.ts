export interface NavMenuModel {
  id: number;
  name: string;
  route: string;
  subMenu: NavSubMenuModel[];
}

export interface NavSubMenuModel {
  id: number;
  name: string;
  route: string;
  fragmentId: string;
}