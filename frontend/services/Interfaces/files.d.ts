namespace FilesInterface {
  interface IFile {
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
    file?: File;
  }
}
