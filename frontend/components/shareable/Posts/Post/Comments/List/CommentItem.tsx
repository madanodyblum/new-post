import { CommentsNamespace } from "@Components/data/comments";
import React, { useEffect, useState } from "react";

const CommentItem = ({
  id,
  userAvatar,
  content,
  imgContent,
  contentType,
  emotionsCount,
  lastEmotionEntity,
  time,
  timeFunc,
  isLiked,
}: CommentsNamespace.IComment) => {
  const [timeStr, setTimeStr] = useState<string>("");
  useEffect(() => {
    const value = timeFunc(time);
    setTimeStr(value);
  }, [time]);
  return (
    <div className="comment-item">
      <div className="comment-user-image">
        {userAvatar && (
          <img
            src={userAvatar ? userAvatar : "/images/user-img/user-img-6.png"}
            alt="user-name"
          />
        )}
      </div>
      <div className="comment-body">
        <div className={`text ${contentType == "text" ? "" : "just-emo"}`}>
          {imgContent && (
            <img
              src={imgContent}
              className="emotion-image"
              alt="emotion-name"
            />
          )}
          {content}
          <div className="comment-emotion">
            {lastEmotionEntity && (
              <img src={lastEmotionEntity} alt="emotion-name" />
            )}

            <span className="bunter">{emotionsCount}</span>
          </div>
        </div>
        <div className="comment-like">
          <button
            type="button"
            className={`btn-link ${isLiked ? "active" : ""}`}
          >
            Like
          </button>
          <button type="button" className="btn-link">
            Reply
          </button>
          <span>{timeStr}</span>
        </div>
      </div>
    </div>
  );
};
export default React.memo(CommentItem);
