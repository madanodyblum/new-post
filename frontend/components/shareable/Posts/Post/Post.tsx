import { PostsNamespace } from "@Components/data/post";
import { Button } from "@Components/shareable/ButtonsStyles";
import Reactions from "@Components/shareable/Reactions/Reactions";
import useHover from "@Hooks/useHover";

export default ({
  tags,
  content,
  htmlContent,
  countComments,
  linkData,
}: PostsNamespace.IPost) => {
  const { ref: likesRef, isHovered: isHover } = useHover();

  return (
    <>
      <div className="card-body">
        {content && (
          <>
            <div className="hashtags">
              <ul>
                {tags?.map((item, index) => {
                  return (
                    <li>
                      <a href={item.url}>#{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="desc">{content}</div>
            {linkData && (
              <div className="feed-image">
                <img src="/images/bg/01.jpg" alt="picture-name" />
              </div>
            )}
            {linkData && (
              <div className="links">
                <a href={linkData.url}>{linkData.url}</a>
              </div>
            )}
          </>
        )}
        {htmlContent && (
          <div
            className="desc"
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
          ></div>
        )}
      </div>
      <div className="card-footer">
        <div className="link-item show-emotion-list">
          <Button className="btn btn-link-text" ref={likesRef}>
            <i className="mdi mdi-thumb-up-outline"></i>Likes<span>(69)</span>
            <Reactions show={isHover} />
          </Button>
        </div>
        <div className="link-item">
          <Button className="btn btn-link-text">
            <i className="mdi mdi-message-outline"></i>Comments
            <span>({countComments})</span>
          </Button>
        </div>
        <div className="link-item">
          <Button className="btn btn-link-text">
            <i className="mdi mdi-share-outline"></i>Share
          </Button>
        </div>
      </div>
    </>
  );
};
