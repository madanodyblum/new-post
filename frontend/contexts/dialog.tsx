import React from "react";

type Props = {
  pushDialog: (e: any) => void;
  popDialog: () => void;
};

export default React.createContext<Props>(null);
