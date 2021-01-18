import React, { useCallback } from "react";
import Dialog from "@Components/shareable/Dialog";
import ChoosePublic from "@Components/shareable/CreatePostDialog/ChoosePublic";

type Props = {
  open: boolean;
  popDialog: () => void;
};

const PrivacyDialog: React.FC<Props> = (props: Props) => {
  const { open = true, popDialog } = props;

  const onClose = useCallback(() => {
    popDialog();
  }, [popDialog]);

  return (
    <Dialog {...{ open, onClose }}>
      <ChoosePublic onBack={onClose} independent={true} />
    </Dialog>
  );
};

export default PrivacyDialog;
