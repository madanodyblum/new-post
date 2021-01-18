import ChatBox from "@Components/shareable/ChatBox";
import BoxStory from "@Components/shareable/CreateStory/BoxStory";
import Header from "@Components/shareable/Header";
import MessageButton from "@Components/shareable/MessageButton";
import Messenger from "@Components/shareable/Messenger";
import ListViewContainer from "@Components/shareable/Posts/ListsPosts/ListContainer";
import Stories from "@Components/shareable/Stories";
import { MainContent } from "@Components/shareable/styles";
import TagsPanel from "@Components/shareable/TagsPanel";
import TrendPanel from "@Components/shareable/TrendPanel";
import WeatherPanel from "@Components/shareable/WeatherPanel";
import CreatePostBox from "../shareable/CreatePost/CreatePostBox";

export default () => {
  return (
    <div>
      <Header />
      <MainContent>
        <div className="container">
          <div className="main-inner">
            <div className="left-side sticky">
              <Messenger />
            </div>
            <div className="center-feeds">
              <BoxStory />
              <CreatePostBox />
              <div className="feeds-title">
                <h2 className="title blue">Home</h2>
              </div>
              <ListViewContainer
                header={{
                  userInfo: {
                    fullname: "LXSX",
                    avatar: "images/user-img/user-img-1.png",
                    _id: "id",
                    profile: "profile",
                  },
                  createdAt: new Date(),
                  menuList: [
                    {
                      title: "Report",
                      url: "url1",
                    },
                    {
                      title: "title2",
                      url: "url2",
                    },
                  ],
                }}
                posts={[
                  {
                    _id: "id",
                    tags: [
                      {
                        title: "angry",
                        img: "img",
                        url: "url",
                        _id: "id1",
                      },
                      {
                        title: "mountain",
                        img: "img",
                        url: "url",
                        _id: "id2",
                      },
                      {
                        title: "lxsx",
                        img: "img",
                        url: "url",
                        _id: "id3",
                      },
                    ],
                    countComments: 1,
                    content:
                      "orem ipsum dolor sit amet consectetur adipisicing elit. Eius doloremque consequuntur quae expedita. Doloremque nobis est veniam praesentium, rem at illum! Eum, nam provident! Praesentium dignissimos voluptates saepe quas ea.",
                    // htmlContent: "htmlContent",
                    linkData: {
                      img: "img",
                      url: "url",
                    },
                  },
                ]}
              />
            </div>
            <div className="right-side sticky">
              <div className="inner">
                <div className="side-body">
                  <Stories />
                </div>
                <div className="side-body hidden-small">
                  <TagsPanel />
                </div>
                <div className="side-body hidden-small">
                  <TrendPanel />
                </div>
                <div className="side-body hidden-small">
                  <WeatherPanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>

      <MessageButton />
      <ChatBox />
    </div>
  );
};
