import { positionCategoriesData } from "../data/position-category/position-category.data";

export function positionCategory(id: number): string {
  return positionCategoriesData.find(x => x.id === id)?.name ?? ''
}