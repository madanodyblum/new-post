import React, { useCallback, useState } from "react";
import DialogContext from "../contexts/dialog";

type Props = {
  children: React.ReactNode;
};

function DialogProvider(props: Props) {
  const { children } = props;
  const [dialogs, setComponents] = useState([]);

  const pushDialog = useCallback(
    (dialog) => {
      setComponents([...dialogs, dialog]);
    },
    [dialogs]
  );

  const popDialog = useCallback(() => {
    dialogs.pop();
    setComponents([...dialogs]);
  }, [dialogs]);

  return (
    <DialogContext.Provider value={{ pushDialog, popDialog }}>
      {React.Children.only(children)}

      {dialogs.map(([component, componentProps], index) => {
        return React.createElement(component, {
          popDialog,
          key: index,
          ...componentProps,
        });
      })}
    </DialogContext.Provider>
  );
}

export default DialogProvider;
