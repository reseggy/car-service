interface TInstagramPost {
  imgSrc: string;
  likes: number;
  text: string;
}

export interface TInstagramPosts {
  items: TInstagramPost[];
}
