import { Content, Modal, Footer, Header, Backdrop, Wrapper } from "./styles";
import { Button } from "../ButtonsStyles";
import ReactDOM from "react-dom";
import { useEffect } from "react";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}
export default ({ isShown, hide, modalContent }: ModalProps) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };
  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");

    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);
  const modal = (
    <>
      <Backdrop onClick={hide} />
      <Wrapper
        aria-modal
        aria-labelledby={"Create Post"}
        tabIndex={-1}
        role="dialog"
      >
        <Modal className="modal-body">
          <div className="content-create-post active">
            <Header>
              <span className="close" onClick={hide}>
                <i className="mdi mdi-close"></i>
              </span>
              <h2>Create Post</h2>
            </Header>
            <Content>{modalContent}</Content>
            <Footer>
              <Button className="btn-default">Post</Button>
            </Footer>
          </div>
        </Modal>
      </Wrapper>
    </>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
