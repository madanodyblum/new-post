import { map } from "lodash";
import { BoxStyles } from "./styles";
interface IProps {
  menus: {
    title: string;
    url: string;
    handleClick: any;
  }[];
}
export default ({ menus }: IProps) => {
  return (
    <BoxStyles>
      <button type="button" className="btn btn-dots">
        <i className="mdi mdi-dots-horizontal"></i>
      </button>
      <ul className="option-list">
        {menus?.map(({ handleClick, title, url }, index) => {
          return (
            <li key={index} onClick={handleClick}>
              <a href={url}>
                <i className="mdi mdi-alert-circle-outline"></i>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </BoxStyles>
  );
};
