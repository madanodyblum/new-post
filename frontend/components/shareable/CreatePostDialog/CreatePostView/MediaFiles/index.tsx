import React, { useEffect } from "react";
import FileItem from "./FileItem";
import MediaNameSpace from "./interfaces";
enum FileGridView {
  "Multi-1" = "multi-1",
  "Multi-2" = "multi-2",
  "Multi-3" = "multi-3",
  "Multi-4" = "multi-4",
  "Multi-5" = "multi-5",
  "Multi-6" = "multi-more",
}
const MediaFiles = ({ mediaList }: MediaNameSpace.IMediaList) => {
  return (
    <div
      className={`attached-inner ${
        mediaList.length > 0
          ? FileGridView[
              `Multi-${mediaList.length < 6 ? mediaList.length : "6"}`
            ]
          : ""
      }`}
    >
      {mediaList?.map((item, index) => {
        /**
         * The scenario of FileItem:
         * no more 6 item will be shown.
         * for last item set last state by isMoreMedia.
         */
        if (index < 7) {
          if (index < 6) {
            return <FileItem key={index} {...item} />;
          } else {
            item.countMedia = mediaList.length;
            item.isMoreMedia = true;
            return <FileItem key={index} {...item} />;
          }
        }
      })}
    </div>
  );
};
export default MediaFiles;
