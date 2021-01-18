import React from "react";
import ReactModal from "react-modal";
import { Modal } from "./styles";
interface IProps {
  children?: any;
  props: ReactModal.Props;

  isOpen: boolean;
  onAfterOpen: Function;
  onRequestClose: Function;
}
export default ({
  children,
  props,
  isOpen,
  onAfterOpen,
  onRequestClose,
}: IProps) => {
  return (
    <Modal
      {...props}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "papayawhip",
        },
        content: {
          color: "lightsteelblue",
        },
      }}
    >
      {children}
    </Modal>
  );
};
