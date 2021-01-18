import React, { Component } from "react";
import Editor from "draft-js-plugins-editor";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import createMentionPlugin from "draft-js-mention-plugin";
import mentions from "./mentions";
import { EditorState } from "draft-js";
import "draft-js-mention-plugin/lib/plugin.css";
import "draft-js-linkify-plugin/lib/plugin.css";
import "draft-js-emoji-plugin/lib/plugin.css";
import "./styles/styles.css";
import "./styles/emoji-styles.css";
import createEmojiPlugin from "draft-js-emoji-plugin";
import insertHashtag from "./insert_hashtag";
import HashtagBox from "./HashtagList";
import { linkStrategy } from "./strategies/linkify/linkStrategy";
import { EditorContainer } from "./styles";
import { UserService } from "@Services/Users/index";
const linkifyPlugin = createLinkifyPlugin();

const hashtagPlugin = createHashtagPlugin({});

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const store = {
  // a dictionary of hashtags, by their block keys
  hashtagsInText: {},
  editorFocused: true,
  clickedOnHashtag: false,
};

const styles = {
  editorContainer: {
    position: "relative",
  },
  popover: {
    position: "absolute",
    background: "white",
    border: "1px solid black",
  },
};

export default class EditorComponent extends Component {
  constructor(props) {
    super(props);
    const { handleParseLink } = props;

    this.mentionPlugin = createMentionPlugin({
      mentions,
      entityMutability: "Segmented",

      mentionPrefix: "@",

      supportWhitespace: true,
    });
    this.onChange = this.onChange.bind(this);
    this.openPopover = this.openPopover.bind(this);
    this.onHashtagClick = this.onHashtagClick.bind(this);
    this.onDownArrow = this.onDownArrow.bind(this);
    this.onUpArrow = this.onUpArrow.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onEscape = this.onEscape.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.focus.bind(this);
  }
  state = {
    editorState: EditorState.createEmpty(),
    autocompleteSuggestions: [],
    focusedHashtagIndex: 0,
    suggestions: mentions,
    styles: styles,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
    const selection = editorState.getSelection();
    const blockKey = selection.getAnchorKey();
    // console.log('blockKey: ', blockKey, 'all keys', Object.keys(store.coordinates), 'tree', editorState.getBlockTree(blockKey), editorState.getBlockTree(blockKey).getIn([1, 'leaves', 0]));
    const block = editorState.getCurrentContent().getBlockForKey(blockKey);
    let link = linkStrategy(block);
    this.props.handleParseLink(link);
  };

  // initially, tried to store the editorFocused property in the component’s state
  // by doing this.setState, but .setState() is asynchronous, so I chose a synchronous mechanism
  onBlur() {
    if (!store.clickedOnHashtag) {
      this.setState({
        displayPopover: false,
      });
      store.editorFocused = false;
    }
  }
  openPopover(suggestions, key) {
    const currentStyles = this.state.styles;
    const popoverStyles = currentStyles.popover;
    popoverStyles.top = 15;
    popoverStyles.left = 15;
    const updatedStyles = Object.assign({}, currentStyles, {
      popover: popoverStyles,
    });

    this.setState({
      displayPopover: true,
      autocompleteSuggestions: suggestions,
      focusedHashtagIndex: 0,
      styles: updatedStyles,
    });
  }

  closePopover() {
    this.setState({ displayPopover: false });
  }

  onHashtagClick(fullHashtag) {
    store.clickedOnHashtag = true;
    store.clickedHashtag = fullHashtag;
    const newEditorState = insertHashtag(
      fullHashtag,
      this.hashtagInfo,
      this.state.editorState,
    );
    this.setState({
      editorState: newEditorState,
    });
    store.editorFocused = true;
    this.closePopover();
  }

  onUpArrow(keyboardEvent) {
    keyboardEvent.preventDefault();
    if (this.state.focusedHashtagIndex - 1 < 0) {
      this.setState({
        focusedHashtagIndex: this.state.autocompleteSuggestions.length - 1,
      });
    } else {
      this.setState({
        focusedHashtagIndex:
          (this.state.focusedHashtagIndex - 1) %
          this.state.autocompleteSuggestions.length,
      });
    }
  }

  onDownArrow(keyboardEvent) {
    keyboardEvent.preventDefault();
    this.setState({
      focusedHashtagIndex:
        (this.state.focusedHashtagIndex + 1) %
        this.state.autocompleteSuggestions.length,
    });
  }

  onEnter(keyboardEvent) {
    keyboardEvent.preventDefault();
    const selectedHashtag = this.state.autocompleteSuggestions[
      this.state.focusedHashtagIndex
    ];
    const newEditorState = insertHashtag(
      selectedHashtag,
      this.hashtagInfo,
      this.state.editorState,
    );
    this.setState({
      editorState: newEditorState,
      displayPopover: false,
    });
    return true;
  }

  onEscape(keyboardEvent) {
    keyboardEvent && keyboardEvent.preventDefault();
    store.escapeKey = this.hashtagInfo.originalKey;
    this.closePopover();
  }
  onSearchChange = async ({ value }) => {
    const { status, data } = await UserService.searchUser({
      searchText: value,
    });
    this.setState({
      suggestions: data,
    });
  };

  onAddMention = () => {
    // get the mention object selected
  };

  focus = () => {
    store.editorFocused = true;
    store.inTransitionToFocus = true;
    this.editor.focus();
  };

  render() {
    const { MentionSuggestions } = this.mentionPlugin;
    const popoverStyles = Object.assign({}, this.state.styles.popover);
    const plugins = [
      hashtagPlugin,
      this.mentionPlugin,
      linkifyPlugin,
      emojiPlugin,
    ];
    return (
      <EditorContainer onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => {
            this.editor = element;
          }}
        />

        <HashtagBox
          style={
            this.state.displayPopover
              ? popoverStyles
              : Object.assign({ display: "none" }, popoverStyles)
          }
          suggestions={this.state.autocompleteSuggestions}
          onHashtagClick={this.onHashtagClick}
          focusedHashtagIndex={this.state.focusedHashtagIndex}
        />
        <EmojiSelect />
        <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
          onAddMention={this.onAddMention}
        />
      </EditorContainer>
    );
  }
}
