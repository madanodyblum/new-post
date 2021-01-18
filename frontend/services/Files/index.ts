import { IResultService } from "@Components/data/general";
import { Http } from "../Http/index";
const prefixUrl = `${process.env.APP_URL}/files`;
const FilesApi = {
  uploadFile: async ({
    file,
  }: FilesInterface.IFile): Promise<IResultService<FilesInterface.IFile>> => {
    const formPayload = new FormData();
    formPayload.append("file", file);
    let response: GlobalNamespace.IResultService<FilesInterface.IFile>;
    try {
      response = await Http.Request({
        methodType: "post",
        url: `${prefixUrl}/upload`,
        payload: formPayload,
        needAuth: true,
      });
    } catch (e) {
      response = {
        status: 2,
        message: e,
      };
    }
    return response;
  },
  downloadFile: async ({
    _id,
  }: FilesInterface.IFile): Promise<IResultService<FilesInterface.IFile>> => {
    let response: GlobalNamespace.IResultService<FilesInterface.IFile>;
    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrl}/downlaod/${_id}`,
        needAuth: true,
      });
    } catch (e) {
      response = {
        status: 2,
        message: e,
      };
    }
    return response;
  },
};
export default FilesApi;
