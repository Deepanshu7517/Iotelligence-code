type MediaGroup = {
  images: string[];
  videos: string[];
};

export type CategorizedMedia = Record<string, MediaGroup>;
