/**
 * TODO - 1. Editor
 * TODO - 2. Emoji
 * TODO - 3. Attachments files
 * TODO - 4. Privacy
 * TODO - 5. HashTags
 * TODO - 6. Mentions User
 * TODO - 7. Check media or link component
 * TODO - 8. Get user data
 */

import { ContentCreatePost } from "./style";
import Editor2 from "@Components/shareable/Editor/index";
import MediaFiles from "./MediaFiles/index";
import React, { useState, useRef } from "react";
import MediaNameSpace from "./MediaFiles/interfaces";
import LinkPerview from "./LinkPreview";

export default ({ showChoosePublic }) => {
  const [files, setFiles] = useState<MediaNameSpace.IMedia[]>([]);
  const [linkData, setLinkData] = useState<string>(null);
  const fileuploader = useRef(null);
  const handleUploadFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newFiles: MediaNameSpace.IMedia[] = [];
    let filesTemp = e.target.files;

    for (let index = 0; index < filesTemp.length; index++) {
      if (
        filesTemp[index].type.toString().startsWith("image") ||
        filesTemp[index].type.toString().startsWith("video")
      ) {
        const isExited =
          newFiles.findIndex((x) => x.title == filesTemp[index].name) > -1;
        if (!isExited) {
          newFiles.push({
            title: filesTemp[index].name,
            countMedia: 0,
            file: filesTemp[index],
            img: "",
            isMoreMedia: false,
            kindMedia: filesTemp[index].type.toString().startsWith("image")
              ? "image"
              : "video",
          });
        }
      }
    }

    setFiles((pervFiles) => [...pervFiles, ...newFiles]);

    e.target.value = "";
  };

  const handleDeleteAllFiles = () => {
    setFiles([]);
  };
  const handleParseLink = async (e) => {
    if (e) {
      setLinkData(e.url);
    }
  };
  const handleDeleteLinkPrieview = () => {
    setLinkData(null);
  };
  return (
    <ContentCreatePost>
      <div className="user-info">
        <div className="user-image">
          <img src="images/user-img/user-img-1.png" alt="user-name" />
        </div>
        <div className="user-privacy">
          <h2>User Name</h2>
          <div id="btn-select-privacy" className="select-privacy">
            <i className="mdi mdi-earth"></i>
            <span onClick={showChoosePublic}>Public</span>
            <i className="mdi mdi-menu-down"></i>
          </div>
        </div>
      </div>

      <div className="comment-attached-file active">
        <div className="text-group">
          <Editor2 handleParseLink={handleParseLink} />
        </div>
        <div className="file-attached">
          {linkData && files.length == 0 && (
            <LinkPerview
              link={linkData}
              handleDeleteLinkPrieview={handleDeleteLinkPrieview}
            />
          )}
          {files && files.length > 0 && (
            <>
              <div className="edit-file-buttons">
                <button
                  type="button"
                  className="btn-edit"
                  onClick={() => fileuploader.current.click()}
                >
                  <i className="mdi mdi-image-plus"></i>Add Photos/Videos
                </button>
                <button
                  type="button"
                  className="btn-delete-file"
                  onClick={handleDeleteAllFiles}
                >
                  <i className="mdi mdi-close"></i>
                </button>
              </div>
              <MediaFiles mediaList={files} />{" "}
            </>
          )}
        </div>
      </div>

      <div className="attachment">
        <div className="atch-inner">
          <button className="btn-attach-text">Add to Your Post</button>
          <div className="button-attach">
            <button
              className="btn-attach green"
              onClick={() => fileuploader.current.click()}
            >
              <input
                id="file"
                ref={fileuploader}
                type="file"
                multiple
                accept="video/*,image/*"
                style={{ display: "none" }}
                onChange={handleUploadFiles}
              />
              <i className="mdi mdi-image-multiple-outline"></i>
            </button>
          </div>
        </div>
      </div>
    </ContentCreatePost>
  );
};
