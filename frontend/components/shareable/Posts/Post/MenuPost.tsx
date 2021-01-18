import { PostsNamespace } from "@Components/data/post";
import { Button } from "@Components/shareable/ButtonsStyles";
import { BoxStyles } from "@Components/shareable/MenuBox/styles";

interface IProps {
  menuList: PostsNamespace.IMenu[];
}
export default ({ menuList }: IProps) => {
  return (
    <BoxStyles>
      <div className="options">
        <Button type="button" className="btn btn-dots">
          <i className="mdi mdi-dots-horizontal"></i>
        </Button>
          <ul className="option-list">
            {menuList?.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <i className="mdi mdi-alert-circle-outline"></i>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </BoxStyles>
  );
};
