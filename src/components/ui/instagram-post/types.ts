interface TInstagramPost {
  imgSrc: string;
  likes: number;
  text: string;
}

export interface TInstagramPostProps {
  item: TInstagramPost;
}
