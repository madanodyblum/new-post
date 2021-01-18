import { ContentBlock } from "draft-js";
import linkifyIt from "linkify-it";
import tlds from "tlds";

const linkify = linkifyIt();
linkify.tlds(tlds);

// Gets all the links in the text, and returns last link
const linkStrategy = (contentBlock: ContentBlock): string => {
  const links = linkify.match(contentBlock.get("text"));

  if (links?.length > 0) return links[links.length - 1];
  else return null;
};
const extractLinks = (contentBlock: ContentBlock): string[] => {
  const links = linkify.match(contentBlock.get("text"));

  return links;
};
export { linkStrategy, extractLinks };
