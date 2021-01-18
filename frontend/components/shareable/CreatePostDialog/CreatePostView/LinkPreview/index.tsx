import { getLinkPreview } from "link-preview-js";
import { useEffect, useState } from "react";
import { LinkPreviewContainer } from "./styles";
import Loading from "@Components/shareable/loading/index";
interface IProps {
  link: string;
  handleDeleteLinkPrieview: () => void;
}
interface ILongData {
  url?: string;
  title?: any;
  siteName?: any;
  description?: any;
  mediaType?: any;
  contentType?: string | undefined;
  images?: string[];
  videos?: {
    url: any;
    secureUrl: any;
    type: any;
    width: any;
    height: any;
  }[];
  favicons?: any[];
}
export default ({ link, handleDeleteLinkPrieview }: IProps) => {
  const [linkData, setLinkData] = useState<ILongData>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      if (link) {
        try {
          const linkPreviewData = await getLinkPreview(link);
          setLinkData(linkPreviewData);
        } catch {
          setLinkData(null);
        }
      }
      setLoading(false);
    })();
  }, [link]);
  return loading ? (
    <Loading background="#2680EB" />
  ) : linkData ? (
    <LinkPreviewContainer>
      <div className="buttons">
        <button
          type="button"
          className="btn-delete-link"
          onClick={handleDeleteLinkPrieview}
        >
          <i className="mdi mdi-close"></i>
        </button>
      </div>

      <div className="image">
        <img
          height="177"
          width="139"
          src={linkData?.images ? linkData?.images[0] : ""}
          title={linkData?.title}
        />
      </div>
      <div className="data">
        <span className="site-name">{linkData?.siteName}</span>
        <span className="title">{linkData?.title}</span>
        <span className="description">{linkData?.description}</span>
      </div>
    </LinkPreviewContainer>
  ) : (
    <></>
  );
};
