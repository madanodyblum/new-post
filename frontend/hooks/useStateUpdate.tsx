import { useCallback } from "react";
import _ from "@Helpers/lodash";
/**
 * This Hook is for update object state
 */
export default () => {
  const setInState = useCallback((setState, name, value) => {
    setState((_form) => _.setIn(_form, name, value));
  }, []);

  return { setInState };
};
