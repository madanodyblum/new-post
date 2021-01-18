import { TopLinksContainer } from "./styles";
export default () => {
  return (
    <TopLinksContainer>
      <div className="container">
        <ul>
          <li>
            <a href="#">
              <i className="mdi mdi-newspaper-variant-outline"></i>LinkName
            </a>
          </li>
          <li>
            <a href="#">
              <i className="mdi mdi-play-circle-outline"></i>LinkName
            </a>
          </li>
          <li>
            <a href="#">
              <i className="mdi mdi-pound"></i>LinkName
            </a>
          </li>
          <li>
            <a href="#">
              <i className="mdi mdi-trending-up"></i>LinkName
            </a>
          </li>
        </ul>
      </div>
    </TopLinksContainer>
  );
};
