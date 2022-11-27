export interface ArticlesProps {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface ArticlesState {
  status: string;
  totalResults: number;
  articles: ArticlesProps[];
}
