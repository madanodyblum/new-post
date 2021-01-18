declare namespace MediaNameSpace {
  export enum FileGridView {
    "Multi-1" = "multi-1",
    "Multi-2" = "multi-2",
    "Multi-3" = "multi-3",
    "Multi-4" = "multi-4",
    "Multi-5" = "multi-5",
    "Multi-6" = "multi-more",
  }
  interface IMedia {
    title: string;
    file: File;
    img: any;
    kindMedia: "image" | "video";
    isMoreMedia: boolean;
    countMedia: number;
  }
  interface IMediaList {
    mediaList: IMedia[];
  }
}

export default MediaNameSpace;
