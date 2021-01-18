let support;

/**
 * Check browser webp support
 * @returns {boolean}
 */
export const isWebpSupported = () => {
  if (typeof support !== "undefined") return support;

  const elem: any =
    typeof document === "object" ? document.createElement("canvas") : {};
  if (!!(elem.getContext && elem.getContext("2d"))) {
    // was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  }

  return false;
};
