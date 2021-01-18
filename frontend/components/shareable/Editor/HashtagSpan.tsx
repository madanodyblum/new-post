export const HashtagSpan = ({ offsetKey, children }) => {
  return (
    <span
      style={{
        backgroundColor: "rgba(24, 119, 242, 0.2)",
      }}
      data-offset-key={offsetKey}
    >
      {children}
    </span>
  );
};
