export interface Category {
  data: CategoryData[];
  meta: Meta;
}

export interface CategoryData {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
  rank: number;
  image: Image;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
