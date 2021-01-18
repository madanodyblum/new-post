import { Header } from "./styles";
import { Button } from "../ButtonsStyles";
export default () => {
  return (
    <Header>
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <a href="#">
              <img src="/images/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="header-user">
            <div className="user-inner">
              <div className="user-image">
                <img src="/images/user-img/user-img-1.png" alt="user" />
                <h6>Samir Daghagheleh</h6>
              </div>
              <ul className="user-list">
                <li>
                  <a href="">
                    <i className="mdi mdi-view-dashboard-outline"></i>Admin
                    Panel
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="mdi mdi-logout-variant"></i>Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-search">
            <input type="text" className="search-input" placeholder="Search" />
            <div className="mobile-search">
              <button type="button" className="btn-mobile-search">
                <i className="mdi mdi-magnify"></i>
              </button>
            </div>
          </div>
          <div className="header-create">
            <Button className="btn-default" id="btn-showCreatePost">
              <i className="mdi mdi-plus"></i>
            </Button>
            <div className="create-menu">
              <h4>Create</h4>
              <ul>
                <li>
                  <a className="modalCreatePost">
                    <div className="icon">
                      <i className="mdi mdi-square-edit-outline"></i>
                    </div>
                    <div className="text">
                      <h6>Post</h6>
                      <span>Share a post on News Feed</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="create-story.html">
                    <div className="icon">
                      <i className="mdi mdi-shape-circle-plus"></i>
                    </div>
                    <div className="text">
                      <h6>Story</h6>
                      <span>Share a photo or write something</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-menu">
            <ul className="links-menu">
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
            <div className="mobile-links">
              <div className="icon">
                <i className="mdi mdi-dots-horizontal"></i>
              </div>
              <ul className="link-list">
                <li>
                  <a href="#">Popular</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Link Name</a>
                </li>
                <li>
                  <a href="#">Link Name</a>
                </li>
                <li>
                  <a href="#">Link Name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};
