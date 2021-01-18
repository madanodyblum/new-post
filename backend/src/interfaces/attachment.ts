namespace AttachmentInterface {
  export interface IAttachmentBody {
    _id?: any;
    title?: string;
    path?: string;
    type?: string;
    author?: {
      id: string;
      userName: string;
    };
    fileSize?: number;
    deleted?: boolean;
    contentType?: string;
    fileType?: string;
  }

  export interface IObjectUpload {
    id?: string;
    fileSize?: number;
    _idfile?: string;
    ext?: string;
    filePath?: string;
    title?: string;
    type?: string;
    contenttype?: string;
    pathdownload?: string;
  }
}
export default AttachmentInterface;
