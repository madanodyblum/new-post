import { _baseParams } from "@Components/data/baseParams";
import { Http } from "../Http/index";
const prefixUrl = `${process.env.APP_URL}/users`;
const UserService = {
  searchUser: async ({
    searchText,
  }: UserNamespace.IFilter): Promise<
    GlobalNamespace.IResultService<UserNamespace.IUserSearch[]>
  > => {
    let response: GlobalNamespace.IResultService<UserNamespace.IUserSearch[]>;
    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrl}/usersearch`,
        params: { searchText },
        needAuth: true,
      });
      response.data = response.data.map(
        (row) =>
          (row = {
            ...row,
            link: `${_baseParams.basePath}/${_baseParams.profilePage}/${row.userName}`,
            name: `${row.name} ${row.lastName}`,
          }),
      );
    } catch (e) {
      response = {
        status: 2,
        data: [],
        message: e,
      };
    }
    return response;
  },
};
export default UserService;
