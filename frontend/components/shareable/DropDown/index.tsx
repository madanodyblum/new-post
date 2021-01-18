import { css } from "emotion";
import {
  AnchorMode,
  CSSObject,
  Direction,
  MediaType,
} from "@Constants/types";
import useResponsive from "@Hooks/useResponsive";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

const Main = styled.div`
  position: fixed;
  z-index: 1400;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

export type DropDownOverrides = {
  container?: CSSObject;
};
type Props = {
  anchorEl?: HTMLElement | undefined | null;
  open: boolean;
  onClose?: () => void;
  fullScreenOnMobile?: boolean;
  children: React.ReactNode;
  anchorMode?: AnchorMode;
  styleOverrides?: DropDownOverrides;
  dataTestId?: string;
  onRef?: (element: HTMLDivElement) => void;
};
const noop = () => {};

const DropDown: React.FC<Props> = (props: Props) => {
  const {
    children,
    anchorEl,
    open,
    onClose,
    fullScreenOnMobile,
    anchorMode = AnchorMode.TOP_RIGHT,
    styleOverrides,
    dataTestId = "dropdown-container",
    onRef = noop,
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const refCreated = useRef<boolean>(false);
  const childRef = useRef<HTMLDivElement>(null);
  const [childRect, setChildRect] = useState<DOMRect>();

  const { responsive } = useResponsive();

  const clientRect = anchorEl && anchorEl.getBoundingClientRect();
  useEffect(() => {
    if (!refCreated.current && rootRef.current) {
      onRef(rootRef.current);
    }
  }, [onRef]);

  const position = useMemo(() => {
    if (responsive < MediaType.MD && fullScreenOnMobile) {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    if (clientRect) {
      const { top, right, left, width, height } = clientRect;
      let direction: Direction = Direction.DOWN;
      if (window.innerHeight - (top + height) < (childRect?.height || 0) + 30) {
        direction = Direction.UP;
      }

      const sharedProperty = {
        top: direction === Direction.DOWN ? top + height + 4 : "unset",
        bottom:
          direction === Direction.UP ? window.innerHeight - top + 4 : "unset",
      };
      if (anchorMode === AnchorMode.TOP_RIGHT) {
        return {
          ...sharedProperty,
          right: window.innerWidth - right,
        };
      } else if (anchorMode === AnchorMode.TOP_LEFT) {
        return {
          ...sharedProperty,
          left: left,
        };
      } else if (anchorMode === AnchorMode.TOP_MIDDLE) {
        return {
          ...sharedProperty,
          right: window.innerWidth - right + width / 2,
        };
      }
    }
  }, [responsive, fullScreenOnMobile, clientRect, childRect, anchorMode]);

  const style: CSSObject = useMemo(
    () => ({
      opacity: open ? "1" : "0",
      pointerEvents: open ? "auto" : "none",
      ...position,
      ...(styleOverrides?.container || {}),
    }),
    [open, position, styleOverrides?.container]
  );

  const onMouseUp = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!anchorEl) {
        return;
      }

      if (
        rootRef &&
        !rootRef.current?.contains(e.target) &&
        !anchorEl.contains(e.target)
      ) {
        if (onClose) {
          onClose();
        }
      }
    },
    [anchorEl, onClose]
  );

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);

    return () => document.removeEventListener("mouseup", onMouseUp);
  }, [onMouseUp]);

  useEffect(() => {
    const childClientRect = childRef.current?.getBoundingClientRect();
    if (childClientRect && childClientRect.height !== 0) {
      setChildRect(childClientRect);
    }
  }, [open]);

  return (
    <Main ref={rootRef} data-testid={dataTestId} className={css(style)}>
      <div ref={childRef}>{children}</div>
    </Main>
  );
};

export default DropDown;