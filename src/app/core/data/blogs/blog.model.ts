export interface BlogModel {
  id: number;
  category: string;

  date: string;
  image: string;
  title: string;
  slug: string;
  commentCount: number;

  content: string;
  metaText: string;
  metaTitle: string;

  industryNews: string;
  isPopular: boolean;
}
