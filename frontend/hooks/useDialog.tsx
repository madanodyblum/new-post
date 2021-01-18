import { useCallback, useContext } from "react";
import DialogContext from "../contexts/dialog";

const useDialog = (component: React.FC) => {
  const { pushDialog, popDialog } = useContext(DialogContext);

  const openDialog = useCallback(
    (props) => {
      return new Promise((resolve, reject) =>
        pushDialog([component, props, resolve, reject])
      );
    },
    [component, pushDialog]
  );

  const closeDialog = useCallback(() => {
    popDialog();
  }, [popDialog]);

  return { openDialog, closeDialog };
};

export default useDialog;
