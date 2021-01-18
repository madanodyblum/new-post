import { ObjectInterpolation } from "emotion";

export enum ProfileSlug {
  POSTS = "",
  ABOUT = "about",
  FRIENDS = "friends",
  MEDIA = "media",
}

export type CSSObject = ObjectInterpolation<any>;

export enum AnchorMode {
  TOP_LEFT,
  TOP_RIGHT,
  TOP_MIDDLE,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
}

export enum Direction {
  UP,
  DOWN,
}

export enum MediaType {
  XS = 0,
  SM = 1,
  MD = 2,
  LG = 3,
}
