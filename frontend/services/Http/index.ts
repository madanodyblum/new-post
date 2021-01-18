import { stringify } from "query-string";
import axios from "axios";
export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

export const Http = {
  Request: async <A>({
    methodType,
    url,
    formData,
    needAuth,
    params,
    payload,
  }: GlobalNamespace.IBodyRequest): Promise<
    GlobalNamespace.IResultService<A>
  > => {
    let auth = "";
    if (needAuth == true) {
      auth = localStorage.getItem("token");
    }
    return new Promise((resolve, reject) => {
      const query = params ? `?${stringify({ ...params })}` : "";

      let extraHeader = {};
      let headers: any = {
        "Content-Type": "application/json",
      };
      if (auth && auth.length > 0) {
        headers = { ...headers, Authorization: `Bearer ${auth}` };
      }
      if (formData) {
        extraHeader = { ...formData.getHeaders() };
        headers = { ...extraHeader };
      }

      let body = undefined;

      body = payload;
      if (formData) body = formData;
      axios({
        method: methodType,
        url: `${url}${query}`,
        data: body,
        headers,
      })
        .then(async (x) => {
          if (x.status === 200) {
            let response: GlobalNamespace.IResultService<A>;
            const data = x.data;
            response = data;
            if (response.status === 1) {
              return resolve(response);
            } else {
              return reject(response);
            }
          }

          return reject(x);
        })
        .catch((e) => {
          if (e.toString().indexOf("status code 401")) {
          }

          return reject(e.response);
        });
    });
  },
};
