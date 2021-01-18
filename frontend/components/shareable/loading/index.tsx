import LoadingStyled from "./styles";
interface IProps {
  background?: string;
}
export default ({ background }: IProps) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        fontWeight: "bold",
      }}
    >
      Please wait
      <LoadingStyled background={background}>
        <div></div>

        <div></div>
        <div></div>
        <div></div>
      </LoadingStyled>
    </div>
  );
};
