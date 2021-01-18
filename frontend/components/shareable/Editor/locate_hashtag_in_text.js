import { extractHashtagsWithIndices } from "./utils/hashtag_dectect";

const locateHashtagInText = (editorState) => {
  const selection = editorState.getSelection();
  const blockKey = selection.getAnchorKey();
  // console.log('blockKey: ', blockKey, 'all keys', Object.keys(store.coordinates), 'tree', editorState.getBlockTree(blockKey), editorState.getBlockTree(blockKey).getIn([1, 'leaves', 0]));
  const block = editorState.getCurrentContent().getBlockForKey(blockKey);
  const hashtags = extractHashtagsWithIndices(block.getText());
  const lastHashTag = hashtags[hashtags.length - 1];
  let obj = {
    start: lastHashTag?.indices[0],
    end: lastHashTag?.indices[1],
    search: lastHashTag?.hashtag,
  };

  return obj;
};

export default locateHashtagInText;
